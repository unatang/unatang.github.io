/**
 * Created by lyon on 2016/12/28.
 */
window.onload = function () {
    var numInput = document.getElementById("num-input");
    var leftIn = document.getElementById("left-in");
    var rightIn = document.getElementById("right-in");
    var leftOut = document.getElementById("left-out");
    var rightOut = document.getElementById("right-out");
    var container = document.getElementById("container");
    var clHeight = container.clientHeight;

    var ai = []; //[1,2,3,....]
    function paint() {
        var innerHTML = "";
        for(var i=0; i<ai.length; i++) {
            innerHTML += "<div style='width:10px; height:" + ai[i] + "px; left: 7px; top:" + (clHeight-ai[i]) + "px'></div>";
        }
        container.innerHTML = innerHTML;
    }
    leftIn.onclick = function () {
        if(numInput.value == "") {
            alert("请不要为空！");
        } else if (isNaN(parseInt(numInput.value))) {
            alert("请写数字！");
        } else if(parseInt(numInput.value)<10 || parseInt(numInput.value)>100) {
            alert("请输入10-100的数字！");
        } else if(ai.length > 60) {
            alert("数组长度超过60！");
        }else {
            var text = numInput.value;
            ai.unshift(text);
            paint();
        }
    }
    rightIn.onclick = function () {
        if(numInput.value == "") {
            alert("请不要为空");
        } else if (isNaN(parseInt(numInput.value))) {
            alert("请写数字")
        } else if(parseInt(numInput.value)<10 || parseInt(numInput.value)>100) {
            alert("请输入10-100的数字！");
        } else if(ai.length > 60) {
            alert("数组长度超过60！");
        }else {
            var text = numInput.value;
            ai.push(text);
            paint();
        }
    }

    leftOut.onclick = function () {
        ai.shift();
        paint();
    }
    rightOut.onclick = function () {
        ai.pop();
        paint();
    }



}