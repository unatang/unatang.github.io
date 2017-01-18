/**
 * Created by lyon on 2017/1/8.
 */
window.onload = function () {
    var numInput = document.getElementById("num-input");
    var leftIn = document.getElementById("left-in");
    var rightIn = document.getElementById("right-in");
    var leftOut = document.getElementById("left-out");
    var rightOut = document.getElementById("right-out");
    var container = document.getElementById("container");


    var ai = [];
    function  paint() {
        var innerHTML = "";
        for(var i=0; i<ai.length; i++) {
            innerHTML += "<span data-i='" + i + "'>" + ai[i] + "</span>";
        }
        container.innerHTML = innerHTML;
    }

    var container  = document.getElementById("container");
    container.addEventListener("click", function (e) {
        var i = e.target.getAttribute("data-i");
        console.log(i);
        if(i != null) {
            var i = parseInt(i);
            ai.splice(i,1);
            paint();
        }
    }, false);

    leftIn.addEventListener("click", function () {
        var text = numInput.value;
        if(text == "") {
            alert("请不要为空");
        } else if(isNaN(parseInt(text))) {
            alert("请输入数字");
        } else {
            ai.unshift(text);
            paint();
        }
    },false);

    rightIn.addEventListener("click", function () {
        var text = numInput.value;
        if(text == "") {
            alert("请不要为空");
        } else if(isNaN(parseInt(text))) {
            alert("请输入数字");
        } else {
            ai.push(text);
            paint();
        }
    }, false);

    leftOut.onclick = function () {
        ai.shift();
        paint();
    }
    rightOut.onclick = function () {
        ai.pop();
        paint();
    }
}