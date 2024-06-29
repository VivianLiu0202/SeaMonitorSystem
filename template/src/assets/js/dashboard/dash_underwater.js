window.addEventListener("load", function () {

    try {

        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;

        if (ParsedObject.settings.layout.darkMode) {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
                =============================
                    Daily Sales | Options
                =============================
            */
            var d_2options1 = {
                chart: {
                    height: 160,
                    type: 'bar',
                    stacked: true,
                    stackType: '100%',
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: [3, 4],
                    curve: "smooth",
                },
                colors: ['#e2a03f', '#e0e6ed'],
                series: [{
                    name: 'Sales',
                    data: [44, 55, 41, 67, 22, 43, 21]
                }, {
                    name: 'Last Week',
                    data: [13, 23, 20, 8, 13, 27, 33]
                }],
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
                    crosshairs: {
                        show: false
                    }
                },
                yaxis: {
                    show: false
                },
                fill: {
                    opacity: 1
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        borderRadius: 8,
                    }
                },
                legend: {
                    show: false,
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: -40,
                        left: 0
                    },
                },
                responsive: [
                    {
                        breakpoint: 575,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 5,
                                    columnWidth: '35%'
                                }
                            },
                        }
                    },
                ],
            }

            /*
                =============================
                    Total Orders | Options
                =============================
            */
            var d_2options2 = {
                chart: {
                    id: 'sparkline1',
                    group: 'sparklines',
                    type: 'area',
                    height: 290,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .30,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                },
                series: [{
                    name: 'Sales',
                    data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                yaxis: {
                    min: 0
                },
                grid: {
                    padding: {
                        top: 125,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    theme: Theme
                },
                colors: ['#00ab55']
            }

            /*
                =================================
                    Revenue Monthly | Options
                =================================
            */
            var options1 = {
                chart: {
                    fontFamily: 'Nunito, sans-serif',
                    height: 365,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        opacity: 0.2,
                        blur: 10,
                        left: -7,
                        top: 22
                    },
                    toolbar: {
                        show: false
                    },
                },
                colors: ['#e7515a', '#2196f3'],
                dataLabels: {
                    enabled: false
                },
                markers: {
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 7,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 5
                    }, {
                        seriesIndex: 2,
                        dataPointIndex: 11,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 4
                    }]
                },
                subtitle: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: 100,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#00ab55'
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#bfc9d4'
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2,
                    lineCap: 'square'
                },
                series: [{
                    name: 'Expen',
                    data: [16800, 16800, 15500, 14800, 15500, 17000, 21000]
                }],
                labels: ['0', '25', '50', '75', '100', '125', '150'],
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: true
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Nunito, sans-serif',
                            cssClass: 'apexcharts-xaxis-title',
                        },
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (value, index) {
                            return (value / 1000) + 'K'
                        },
                        offsetX: -15,
                        offsetY: 0,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Nunito, sans-serif',
                            cssClass: 'apexcharts-yaxis-title',
                        },
                    }
                },
                grid: {
                    borderColor: '#191e3a',
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    padding: {
                        top: -50,
                        right: 0,
                        bottom: 0,
                        left: 5
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -50,
                    fontSize: '16px',
                    fontFamily: 'Quicksand, sans-serif',
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        onClick: undefined,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 20
                    }

                },
                tooltip: {
                    theme: Theme,
                    marker: {
                        show: true,
                    },
                    x: {
                        show: false,
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .19,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -50,
                        },
                    },
                }]
            }

            /*
                ==================================
                    Sales By Category | Options
                ==================================
            */
            var options = {
                chart: {
                    type: 'donut',
                    width: 370,
                    height: 430
                },
                colors: ['#622bd7', '#e2a03f', '#e7515a', '#1abc9c', '#3498db', '#9b59b6', '#f1c40f'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 30
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '29px',
                                    fontFamily: 'Nunito, sans-serif',
                                    color: undefined,
                                    offsetY: -10
                                },
                                value: {
                                    show: true,
                                    fontSize: '26px',
                                    fontFamily: 'Nunito, sans-serif',
                                    color: '#bfc9d4',
                                    offsetY: 16,
                                    formatter: function (val) {
                                        return val
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    color: '#888ea8',
                                    fontSize: '30px',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce(function (a, b) {
                                            return a + b
                                        }, 0)
                                    }
                                }
                            }
                        }
                    }
                },
                stroke: {
                    show: true,
                    width: 15,
                    colors: '#0e1726'
                },
                series: [985, 737, 270],
                labels: ['鱼群1', '鱼群2', '鱼群3'],

                responsive: [
                    {
                        breakpoint: 1440, options: {
                            chart: {
                                width: 325
                            },
                        }
                    },
                    {
                        breakpoint: 1199, options: {
                            chart: {
                                width: 380
                            },
                        }
                    },
                    {
                        breakpoint: 575, options: {
                            chart: {
                                width: 320
                            },
                        }
                    },
                ],
            }

        } else {

            var Theme = 'dark';

            Apex.tooltip = {
                theme: Theme
            }

            /**
             ==============================
             |    @Options Charts Script   |
             ==============================
             */

            /*
                =============================
                    Daily Sales | Options
                =============================
            */
            var d_2options1 = {
                chart: {
                    height: 160,
                    type: 'bar',
                    stacked: true,
                    stackType: '100%',
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: [3, 4],
                    curve: "smooth",
                },
                colors: ['#e2a03f', '#e0e6ed'],
                series: [{
                    name: 'Sales',
                    data: [44, 55, 41, 67, 22, 43, 21]
                }, {
                    name: 'Last Week',
                    data: [13, 23, 20, 8, 13, 27, 33]
                }],
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
                    crosshairs: {
                        show: false
                    }
                },
                yaxis: {
                    show: false
                },
                fill: {
                    opacity: 1
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%',
                        borderRadius: 8,
                    }
                },
                legend: {
                    show: false,
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: -40,
                        left: 0
                    },
                },
                responsive: [
                    {
                        breakpoint: 575,
                        options: {
                            plotOptions: {
                                bar: {
                                    borderRadius: 5,
                                    columnWidth: '35%'
                                }
                            },
                        }
                    },
                ],
            }

            /*
                =============================
                    Total Orders | Options
                =============================
            */
            var d_2options2 = {
                chart: {
                    id: 'sparkline1',
                    group: 'sparklines',
                    type: 'area',
                    height: 290,
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                fill: {
                    opacity: 1,
                    // type:"gradient",
                    // gradient: {
                    //     type: "vertical",
                    //     shadeIntensity: 1,
                    //     inverseColors: !1,
                    //     opacityFrom: .30,
                    //     opacityTo: .05,
                    //     stops: [100, 100]
                    // }
                },
                series: [{
                    name: 'Sales',
                    data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
                }],
                labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                yaxis: {
                    min: 0
                },
                grid: {
                    padding: {
                        top: 125,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                },
                tooltip: {
                    x: {
                        show: false,
                    },
                    theme: Theme
                },
                colors: ['#00ab55']
            }

            /*
                =================================
                    Revenue Monthly | Options
                =================================
            */
                   // 初始化图表数据对象
            var chartData = {};

            // 遍历数据并初始化图表数据对象
            Object.keys(allSpeciesData).forEach(function(species, index) {
                var data = allSpeciesData[species];
                chartData["chartData" + (index + 1)] = {
                    series: [{
                        name: species,
                        data: data.weight_counts 
                    }],
                    labels:data.weight_ranges.map(function(range) {
                        return range.join(' - ');  // 根据需要处理标签
                    }),
                    yaxis: {
                        min: Math.min(...data.weight_counts) === 0 ? 0 : Math.min(...data.weight_counts) - 2,
                        max: Math.max(...data.weight_counts) + 2,
                    }, 
                };
            });
                
            var options1 = {
                chart: {
                    fontFamily: 'Nunito, sans-serif',
                    height: 365,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        opacity: 0.2,
                        blur: 10,
                        left: -7,
                        top: 22
                    },
                    toolbar: {
                        show: false
                    },
                },
                colors: ['#1b55e2', '#e7515a'],
                dataLabels: {
                    enabled: false
                },
                markers: {
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 7,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 5
                    }, {
                        seriesIndex: 2,
                        dataPointIndex: 11,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 4
                    }]
                },
                subtitle: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: 100,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#4361ee'
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#0e1726'
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2,
                    lineCap: 'square'
                },
                series:chartData.chartData1.series,
                labels:chartData.chartData1.labels,
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: true
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Nunito, sans-serif',
                            cssClass: 'apexcharts-xaxis-title',
                        },
                    }
                },
                yaxis: {
                    min:chartData.chartData1.yaxis.min,
                    max: chartData.chartData1.yaxis.max,
                    labels: {
                    formatter: function(value, index) {
                        return value 
                    },
                    offsetX: -15,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Nunito, sans-serif',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                    }
                }, 
                grid: {
                    borderColor: '#e0e6ed',
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    padding: {
                        top: -50,
                        right: 0,
                        bottom: 0,
                        left: 5
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -50,
                    fontSize: '16px',
                    fontFamily: 'Quicksand, sans-serif',
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        onClick: undefined,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 20
                    }

                },
                tooltip: {
                    theme: Theme,
                    marker: {
                        show: true,
                    },
                    x: {
                        show: false,
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .19,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -50,
                        },
                    },
                }]
            } 


            var options11 = {
                chart: {
                    fontFamily: 'Nunito, sans-serif',
                    height: 365,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    dropShadow: {
                        enabled: true,
                        opacity: 0.2,
                        blur: 10,
                        left: -7,
                        top: 22
                    },
                    toolbar: {
                        show: false
                    },
                },
                colors: ['#1b55e2', '#e7515a'],
                dataLabels: {
                    enabled: false
                },
                markers: {
                    discrete: [{
                        seriesIndex: 0,
                        dataPointIndex: 7,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 5
                    }, {
                        seriesIndex: 2,
                        dataPointIndex: 11,
                        fillColor: '#000',
                        strokeColor: '#000',
                        size: 4
                    }]
                },
                subtitle: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: 100,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#4361ee'
                    }
                },
                title: {
                    text: '',
                    align: 'left',
                    margin: 0,
                    offsetX: -10,
                    offsetY: 20,
                    floating: false,
                    style: {
                        fontSize: '18px',
                        color: '#0e1726'
                    },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    width: 2,
                    lineCap: 'square'
                },
                series: [{
                    name: 'Expenses',
                    data: [168, 168, 155, 148, 155, 170, 210, 100, 100, 100, 100, 110]
                }],
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        show: true
                    },
                    labels: {
                        offsetX: 0,
                        offsetY: 5,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Nunito, sans-serif',
                            cssClass: 'apexcharts-xaxis-title',
                        },
                    }
                },
                /*yaxis: {
                  labels: {
                    formatter: function(value, index) {
                      return (value / 1000) + 'K'
                    },
                    offsetX: -15,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Nunito, sans-serif',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                  }
                },*/
                grid: {
                    borderColor: '#e0e6ed',
                    strokeDashArray: 5,
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    },
                    padding: {
                        top: -50,
                        right: 0,
                        bottom: 0,
                        left: 5
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -50,
                    fontSize: '16px',
                    fontFamily: 'Quicksand, sans-serif',
                    markers: {
                        width: 10,
                        height: 10,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        fillColors: undefined,
                        radius: 12,
                        onClick: undefined,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 20
                    }

                },
                tooltip: {
                    theme: Theme,
                    marker: {
                        show: true,
                    },
                    x: {
                        show: false,
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        type: "vertical",
                        shadeIntensity: 1,
                        inverseColors: !1,
                        opacityFrom: .19,
                        opacityTo: .05,
                        stops: [100, 100]
                    }
                },
                responsive: [{
                    breakpoint: 575,
                    options: {
                        legend: {
                            offsetY: -50,
                        },
                    },
                }]
            }


            /*
                ==================================
                    Sales By Category | Options
                ==================================
            */
            var options = {
                chart: {
                    type: 'donut',
                    width: 370,
                    height: 430
                },
                colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f','#e2a03f'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    fontSize: '14px',
                    markers: {
                        width: 10,
                        height: 10,
                        offsetX: -5,
                        offsetY: 0
                    },
                    itemMargin: {
                        horizontal: 10,
                        vertical: 30
                    }
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '29px',
                                    fontFamily: 'Nunito, sans-serif',
                                    color: undefined,
                                    offsetY: -10
                                },
                                value: {
                                    show: true,
                                    fontSize: '26px',
                                    fontFamily: 'Nunito, sans-serif',
                                    color: '#0e1726',
                                    offsetY: 16,
                                    formatter: function (val) {
                                        return val
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    color: '#888ea8',
                                    fontSize: '30px',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce(function (a, b) {
                                            return a + b
                                        }, 0)
                                    }
                                }
                            }
                        }
                    }
                },
                stroke: {
                    show: true,
                    width: 15,
                    colors: '#fff'
                },
                series: [985, 737, 270,100],
                labels: ['鱼群1', '鱼群2', '鱼群3','鱼群4'],

                responsive: [
                    {
                        breakpoint: 1440, options: {
                            chart: {
                                width: 325
                            },
                        }
                    },
                    {
                        breakpoint: 1199, options: {
                            chart: {
                                width: 380
                            },
                        }
                    },
                    {
                        breakpoint: 575, options: {
                            chart: {
                                width: 320
                            },
                        }
                    },
                ],
            }
        }

        // 提取标签（鱼类名称）和数据（总数量）
        var labels = Object.keys(allSpeciesData);
        var series = labels.map(function(species) {
            return allSpeciesData[species]['total_count'];
        });
        var radialChart = {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                  show: false,
                }
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                            formatter: function (val) {
                                return val.toString(); // 直接返回具体数量
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce(function (a, b) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            },
            series:  series,
            labels: labels,    
        }
        
        var chart = new ApexCharts(
            document.querySelector("#radial-chart"),
            radialChart
        );
        
        chart.render();

        /**
         ==============================
         |    @Render Charts Script    |
         ==============================
         */


        /*
            ============================
                Daily Sales | Render
            ============================
        */
        var d_2C_1 = new ApexCharts(document.querySelector("#daily-sales"), d_2options1);
        d_2C_1.render();

        /*
            ============================
                Total Orders | Render
            ============================
        */
        var d_2C_2 = new ApexCharts(document.querySelector("#total-orders"), d_2options2);
        d_2C_2.render();

        /*
            ================================
                Revenue Monthly | Render
            ================================
        */

        var chartData11 = {
            series: [{
                name: 'Expenses',
                data: [168, 168, 155, 148, 155, 170, 210, 300, 400, 500, 600]
            }]
        };

        var chartData22 = {
            series: [{
                name: 'Expen',
                data: [200, 200, 200, 150, 200, 200, 200, 111, 344, 111, 332, 112]
            }]
        };

        var chartData33 = {
            series: [{
                name: 'Expen',
                data: [300, 300, 300, 150, 300, 300, 300, 111, 344, 111, 332, 112]
            }]
        };
        var chartData44 = {
            series: [{
                name: 'Expen',
                data: [400, 400, 400, 150, 400, 400, 400, 111, 344, 111, 332, 112]
            }]
        };
        var chartData55 = {
            series: [{
                name: 'Expen',
                data: [500, 500, 500, 150, 500, 500, 500, 111, 344, 111, 332, 112]
            }]
        };


        var chart1 = new ApexCharts(
            document.querySelector("#revenueMonthly"),
            options1
        );

        chart1.render();

        var chart2 = new ApexCharts(
            document.querySelector("#revenueMonthly2"),
            options11
        );

        chart2.render();

        // 更新图表数据的函数
        function updateChartData(dataType) {
            Object.keys(allSpeciesData).forEach(function(species, index) {
                var data = allSpeciesData[species];
                chartData["chartData" + (index + 1)] = {
                    series: [{
                        name: species,
                        data: data[dataType + '_counts'] // 根据类型选择数据
                    }],
                    labels: data[dataType + '_ranges'].map(function(range) {
                        return range.join(' - ');
                    }),
                    yaxis:{
                        min: Math.min(...data[dataType + '_counts']) == 0 ? 0 : Math.min(...[dataType + '_counts']) - 2,
                        max: Math.max(...data[dataType + '_counts']) + 2,
                    },
                };
            });
        }

        // 更新图表显示的函数
        function updateChart(speciesIndex) {
            chart1.updateOptions({
                series: chartData["chartData" + speciesIndex].series,
                labels: chartData["chartData" + speciesIndex].labels,
                yaxis: chartData["chartData" + speciesIndex].yaxis,
            });
        }

        // 处理下拉菜单点击事件
        function changeChart(dataType) {
            // 更新图表数据
            updateChartData(dataType);

            // 默认更新到第一个物种的数据
            updateChart(1);
        }

        // 绑定按钮点击事件
        document.querySelector("#fish1").addEventListener('click', function() {
            updateChart(1);
        });
        document.querySelector("#fish2").addEventListener('click', function() {
            updateChart(2);
        });
        document.querySelector("#fish3").addEventListener('click', function() {
            updateChart(3);
        });
        document.querySelector("#fish4").addEventListener('click', function() {
            updateChart(4);
        });
        document.querySelector("#fish5").addEventListener('click', function() {
            updateChart(5);
        });
        document.querySelector("#fish6").addEventListener('click', function() {
            updateChart(6);
        });
        document.querySelector("#fish7").addEventListener('click', function() {
            updateChart(7);
        });

        document.querySelectorAll('.dropdown-item').forEach(function(item) { // 修改选择器
            item.addEventListener('click', function(event) {
                var dataType = event.target.getAttribute('data-type'); // 获取 data-type 属性
                changeChart(dataType);
            });
        });


        document.querySelector("#fish11").addEventListener('click', function () {
            chart2.updateOptions({
                series: chartData11.series,
            });
        });
        document.querySelector("#fish22").addEventListener('click', function () {
            chart2.updateOptions({
                series: chartData22.series,
            });
        });
        document.querySelector("#fish33").addEventListener('click', function () {
            chart2.updateOptions({
                series: chartData33.series,
            });
        });
        document.querySelector("#fish44").addEventListener('click', function () {
            chart2.updateOptions({
                series: chartData44.series,
            });
        });
        document.querySelector("#fish55").addEventListener('click', function () {
            chart2.updateOptions({
                series: chartData55.series,
            });
        });

        /*
            =================================
                Sales By Category | Render
            =================================
        */
        var chartsb = new ApexCharts(
            document.querySelector("#chart-2"),
            options
        );

        chartsb.render();

        /*
            =============================================
                Perfect Scrollbar | Recent Activities
            =============================================
        */
        const ps = new PerfectScrollbar(document.querySelector('.mt-container-ra'));

        // const topSellingProduct = new PerfectScrollbar('.widget-table-three .table-scroll table', {
        //   wheelSpeed:.5,
        //   swipeEasing:!0,
        //   minScrollbarLength:40,
        //   maxScrollbarLength:100,
        //   suppressScrollY: true

        // });


        /**
         * =================================================================================================
         * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
         * =================================================================================================
         */

        document.querySelector('.theme-toggle').addEventListener('click', function () {

            // console.log(localStorage);

            getcorkThemeObject = localStorage.getItem("theme");
            getParseObject = JSON.parse(getcorkThemeObject)
            ParsedObject = getParseObject;

            if (ParsedObject.settings.layout.darkMode) {

                /*
                =================================
                    Revenue Monthly | Options
                =================================
              */

                chart1.updateOptions({
                    colors: ['#e7515a', '#2196f3'],
                    subtitle: {
                        style: {
                            color: '#00ab55'
                        }
                    },
                    title: {
                        style: {
                            color: '#bfc9d4'
                        }
                    },
                    grid: {
                        borderColor: '#191e3a',
                    }
                })


                /*
                ==================================
                    Sales By Category | Options
                ==================================
                */

                chart.updateOptions({
                    stroke: {
                        colors: '#0e1726'
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    value: {
                                        color: '#bfc9d4'
                                    }
                                }
                            }
                        }
                    }
                })


                /*
                    =============================
                        Total Orders | Options
                    =============================
                */

                d_2C_2.updateOptions({
                    fill: {
                        type: "gradient",
                        gradient: {
                            type: "vertical",
                            shadeIntensity: 1,
                            inverseColors: !1,
                            opacityFrom: .30,
                            opacityTo: .05,
                            stops: [100, 100]
                        }
                    }
                })

            } else {

                /*
                =================================
                    Revenue Monthly | Options
                =================================
              */

                chart1.updateOptions({
                    colors: ['#1b55e2', '#e7515a'],
                    subtitle: {
                        style: {
                            color: '#4361ee'
                        }
                    },
                    title: {
                        style: {
                            color: '#0e1726'
                        }
                    },
                    grid: {
                        borderColor: '#e0e6ed',
                    }
                })


                /*
                ==================================
                    Sales By Category | Options
                ==================================
                */

                chart.updateOptions({
                    stroke: {
                        colors: '#fff'
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    value: {
                                        color: '#0e1726'
                                    }
                                }
                            }
                        }
                    }
                })


                /*
                    =============================
                        Total Orders | Options
                    =============================
                */

                d_2C_2.updateOptions({
                    fill: {
                        type: "gradient",
                        opacity: 0.9,
                        gradient: {
                            type: "vertical",
                            shadeIntensity: 1,
                            inverseColors: !1,
                            opacityFrom: .45,
                            opacityTo: 0.1,
                            stops: [100, 100]
                        }
                    }
                })


            }

        })


    } catch (e) {
        console.log(e);
    }

})