/**
 * Created by lyon on 2017/2/5.
 */
/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
    '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];

/* 渲染图表，cityData: [number]， no return */
function initReact(cityData) {
    var react = document.getElementById("rect");
    var clientW = react.clientWidth;  //展示区域宽度
    var clientH = react.clientHeight; //展示区域高度
    var barWidth = clientW/(cityData.length * 2); //间隔,条形宽度
    var innerHTML = "";
    for(var i = 0; i < cityData.length; i++) {
        innerHTML += "<div style='height: " + cityData[i] + "px; width: "+ barWidth +"px; " +
            "left:"+ (barWidth/2 + (barWidth*i)) +"px; top: "+
            (clientH - cityData[i]) +"px; background-color:" + colors[i%colors.length] + "'></div>"
    }
    react.innerHTML = innerHTML;
}

/* 创建下拉框， 绑定onchange事件 */
function city() {
    var citySelect = document.getElementById("city-select");
    var innerHTML = "";
    for(var city in aqiSourceData) {
        innerHTML += "<option> "+ city +" </option>";
    }
    citySelect.innerHTML = innerHTML;
    citySelect.onchange = citySelectChange;
}

/* onchange事件 */
function citySelectChange() {
    var dataList = [];  // [number, ...]
    var radio = document.getElementsByName("timeRadio");  //radio数组
    var city = this.value;  //获取当前城市的值
    if(radio[0].checked) {
        dataList = arr(city);  //arr(city)返回数组， 直接赋值给dataList数组
    } else if(radio[1].checked) {
        dataList = week(city);
    } else {
        dataList = month(city);
    }
    initReact(dataList);
}

/* 给radio绑定onchange事件 */
function radio() {
    var radio = document.getElementsByName("timeRadio");
    radio[0].onchange = radioChange;
    radio[1].onchange = radioChange;
    radio[2].onchange = radioChange;
}

/* radio改变 重新渲染图表 */
function radioChange() {
    var dataList = [];
    var city = document.getElementById("city-select").value;  //获取城市值
    var radio = document.getElementsByName("timeRadio");
    if(radio[0].checked) {
        dataList = arr(city);  //arr(city)有返回值 [number, ..]
    } else if(radio[1].checked) {
        dataList = week(city);
    } else {
        dataList = month(city);
    }
    initReact(dataList);
}

/* 处理数据, city: string, return: [number, ...] */
function arr(city) {
    var data= [];
    for(var date in aqiSourceData[city]) {
        data.push(aqiSourceData[city][date]); //污染指数数值
    }
    return data;
}

/* 按星期统计的数据， city: string, return: [number, ...] */
function  week(city) {
    var data = [];
    var aqi = [];
    for(var date in aqiSourceData[city]) {
        var d = new Date(date);
        var day = d.getDay();  // day = [1, 2, 3, ..]周几
        aqi.push(aqiSourceData[city][date]);
        if(day == 5) {
            var avg = function () {
                var sum = 0;
                for(var i = 0; i < aqi.length; i++) {
                    sum += aqi[i];
                }
                return Math.ceil(sum / aqi.length);
            };
            data.push(avg());
            aqi = [];

        }
    }
    return data;
}

/* 按月统计的数据， city: string, return: [number, ...] */
function month(city) {
    var data = []; //[number, ...]
    var aqi = [];  //[number, ...]
    var month0 = [];
    var month1 = [];
    var month2 = [];
    for(var date in aqiSourceData[city]) {
        var d = new Date(date);
        var month = d.getMonth();
        if(month == 0) {
            month0.push(aqiSourceData[city][date]); //month0 = [number, ..]
        } else if(month == 1) {
            month1.push(aqiSourceData[city][date]);
        } else {
            month2.push(aqiSourceData[city][date]);
        }
    }
    var m0 = avg(month0);
    var m1 = avg(month1);
    var m2 = avg(month2);

    data = [m0, m1, m2];
    return data;
}

/* arr:［number, ...]  */
function avg(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.ceil(sum / arr.length);
}

function init() {
    initReact(arr("北京"));
    city();
    radio();
}

init();