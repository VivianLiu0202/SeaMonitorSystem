// 假设status是一个包含状态信息的对象
let status = {
    version: "V0.1.1",
    temperature: 39.64,
    connection: "断开"
};

// 查询元素
let versionSpan = document.querySelector('#version');
let temperatureSpan = document.querySelector('#temperature');
let connectionSpan = document.querySelector('#connection');

// 根据值设置类
versionSpan.className = status.version === "V0.1.1" ? 'text-green' : 'text-red';
temperatureSpan.className = status.temperature < 40 ? 'text-green' : 'text-red';
connectionSpan.className = status.connection === "断开" ? 'text-red' : 'text-green';
