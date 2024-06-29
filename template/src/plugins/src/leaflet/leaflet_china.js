var provinceData = {};
var provinceQualityData = {};

// 获取省份水质数据
fetch('http://localhost:8000/get_water_quality_statistics/')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if (!provinceData[item.province]) {
                provinceData[item.province] = [];
            }
            provinceData[item.province].push(item);

            if (!provinceQualityData[item.province]) {
                provinceQualityData[item.province] = {
                    totalQuality: 0,
                    count: 0
                };
            }
            provinceQualityData[item.province].totalQuality += item.average_quality;
            provinceQualityData[item.province].count += 1;
        });

        // 计算平均水质
        Object.keys(provinceQualityData).forEach(province => {
            var data = provinceQualityData[province];
            provinceQualityData[province].averageQuality = data.totalQuality / data.count;
        });

        console.log(provinceQualityData);  // 查看计算后的平均水质数据结构
        console.log(provinceData);  // 查看数据结构

        // 所有数据准备好后，加载GeoJSON
        loadGeoJSON();
    });

var geojson;

function getColor(averageQuality) {
    return averageQuality >= 4.5 ? '#800026' :
        averageQuality >= 4.0 ? '#BD0026' :
            averageQuality >= 3.5 ? '#E31A1C' :
                averageQuality >= 3.0 ? '#FC4E2A' :
                    averageQuality >= 2.5 ? '#FD8D3C' :
                        averageQuality >= 2.0 ? '#FEB24C' :
                            averageQuality >= 1.5 ? '#FED976' :
                                '#FFEDA0';
}

function style(feature) {
    var provinceName = feature.properties.name;
    var averageQuality = provinceQualityData[provinceName] ? provinceQualityData[provinceName].averageQuality : 0;
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(averageQuality)
    };
}

function loadGeoJSON() {
    fetch('https://geojson.cn/api/data/china.json')
        .then(response => response.json())
        .then(data => {
            geojson = L.geoJson(data, {
                style: style,
                onEachFeature: onEachFeature
            }).addTo(interactiveMap);
        });
}

var interactiveMap = L.map('interactive-map').setView([35.8617, 104.1954], 4);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiMjJ2aXZpYW4iLCJhIjoiY2x4eDM2bmNkMWFybDJuc2dhMjBla2YyMiJ9.JvAEoauAmQO7RM0TheZFuQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(interactiveMap);


// control that shows state info on hover
var info = L.control();

info.onAdd = function (interactiveMap) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>中国各省水文信息</h4>' + (props ?
        '<b>' + props.name + '</b><br />' : '移动到省份上查看更多信息');
};

info.addTo(interactiveMap);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    //
    // // 更新info控件显示省份信息
    // info.update(layer.feature.properties);
    // 假设已经从后端获取了数据，调用显示详细信息的函数
    if (layer.feature.properties && layer.feature.properties.name) {
        updateInfo(layer.feature.properties.name);  // 显示详细信息
    }
}


function resetHighlight(e) {
    geojson.resetStyle(e.target);
    // 重置info控件到默认提示信息

    info.update();
}

function zoomToFeature(e) {
    interactiveMap.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: function (e) {
            zoomToFeature(e);
            // 调用函数显示详细的流域信息
            showDetailedInfo(feature.properties.name, layer);
        }
    });
    // 假设 'name' 是 GeoJSON 数据中省份名的属性
    if (feature.properties && feature.properties.name) {
        layer.bindPopup('省份: ' + feature.properties.name);
    }
}

// 显示详细流域信息的函数
function showDetailedInfo(provinceName, layer) {
    var detailedInfo = '加载中...'; // 默认信息，可以替换为加载动画或提示

    if (provinceData[provinceName]) {
        detailedInfo = `<h4>详细信息 - ${provinceName}</h4>`;
        provinceData[provinceName].forEach(watershed => {
            detailedInfo += `<b>流域: ${watershed.watershed}</b><br/>
                             维护次数: ${watershed.total_maintenance}<br/>
                             平均水质等级: ${watershed.average_quality}<br/>
                             平均水温: ${watershed.average_temperature.toFixed(2)}°C<br/><br/>`;
        });
    } else {
        detailedInfo += '无相关流域数据';
    }

    // 更新弹窗内容并打开
    layer.setPopupContent(detailedInfo);
    layer.openPopup();
}

// 更新信息面板显示省份流域数据
function updateInfo(provinceName) {
    var infoContent = '<h4>中国各省水文信息</h4>';
    if (provinceData[provinceName]) {
        provinceData[provinceName].forEach(watershed => {
            infoContent += `<b>${watershed.province} - ${watershed.watershed}</b><br/>
                            维护次数: ${watershed.total_maintenance}<br/>
                            平均水质等级: ${watershed.average_quality}<br/>
                            平均水温: ${watershed.average_temperature.toFixed(2)}°C<br/><br/>`;
        });
    } else {
        infoContent += '无流域数据';
    }
    info._div.innerHTML = infoContent;  // 更新控件内容
}

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this._div.innerHTML = '移动到省份上查看更多信息';
    return this._div;
};
//
// // 初始化地图和控件
// var interactiveMap = L.map('interactive-map').setView([35.8617, 104.1954], 4);
// var info = L.control();
// info.addTo(interactiveMap);