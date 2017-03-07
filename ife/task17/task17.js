/**
 * Created by lyon on 2017/3/6.
 */
window.onload = function () {
    var text = document.getElementById("text");
    var items = document.getElementById("items");
    var leftIn = document.getElementById("left-in");
    var clientW = items.clientWidth;
    var clientH = items.clientHeight;
    var arr = [];
    leftIn.addEventListener("click", function () {
        var a = parseInt(text.value);
        if(a >= 10 && a <= 100) {
            if(arr.length < 60) {
                arr.unshift(a);
                var innerHTML = "";
                for(var i = 0; i < arr.length; i++) {
                    innerHTML += "<div style='width:10px; height:" + arr[i] + "px; left: 7px; top:" + (clientH-arr[i]) + "px'></div>";
                }
                items.innerHTML = innerHTML;
            } else {
                alert("不能超过60");
            }
        } else {
            alert("输入10 —— 100之间的数");
        }

    }, false);

    var rightIn = document.getElementById("right-in");
    rightIn.addEventListener("click",function () {
        var a = parseInt(text.value);
        if(a >= 10 && a <= 100) {
            if(arr.length < 60) {
                arr.push(a);
                var innerHTML = "";
                for(var i = 0; i < arr.length; i++) {
                    innerHTML += "<div style='height:" +  arr[i] +"px; width: 30px; left: 2px; top: "
                        + (clientH - arr[i]) +"px '>" + arr[i] + "</div>";
                }
                items.innerHTML = innerHTML;
            } else {
                alert("不能超过60");
            }
        } else {
            alert("输入10 —— 100之间的数");
        }
    },false)

    var leftOut = document.getElementById("left-out");
    leftOut.addEventListener("click", function () {
        if(arr.length != 0) {
            var a = arr.shift();
            alert("删除: " + a);
            var innerHTML = "";
            for(var i = 0; i < arr.length; i++) {
                innerHTML += "<div style='height:" +  arr[i] +"px; width: 30px; left: 2px; top: "
                    + (clientH - arr[i]) +"px '>" + arr[i] + "</div>";
            }
            items.innerHTML = innerHTML;
        }
    }, false)


    var rightOut = document.getElementById("right-out");
    rightOut.addEventListener("click", function () {
        if(arr.length != "") {
            var a = arr.pop();
            alert("删除: " + a);
            var innerHTML = "";
            for(var i = 0; i < arr.length; i++) {
                innerHTML += "<div style='height:" +  arr[i] +"px; width: 30px; left: 2px; top: "
                    + (clientH - arr[i]) +"px '>" + arr[i] + "</div>";
            }
            items.innerHTML = innerHTML;
        }
    },false)
}