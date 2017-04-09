/**
 * Created by lyon on 2017/4/9.
 */
window.onload = function() {
    var arr = []; //公用存取数组

    function inputValue() {
        var input = document.getElementById("text"); //input
        var value = input.value;
        input.value = "";
        if(isNaN(parseInt(value))) {
            alert("请输入数字");
            return undefined;  //设定有返回值，就必须给返回值
        } else if(10 > parseInt(value) || 100 < parseInt(value)) {
            alert("请输入10-100之间的数字");
            return undefined;
        } else {
            return value;
        }

    }
    function addLeft() {
        var leftIn = document.getElementById("left-in");
        leftIn.addEventListener("click", function () {
            var value = inputValue();
            if(value === undefined) {
                return;
            } else {
                arr.unshift(value);
                show(arr);
            }
        });
    }

    function addRight() {
        var rightIn = document.getElementById("right-in");
        rightIn.addEventListener("click", function () {
            var value = inputValue();
            if(value === undefined) {
                return;
            } else {
                arr.push(value);
                show(arr);
            }
        });
    }

    function delLeft() {
        var leftOut = document.getElementById("left-out");
        leftOut.addEventListener("click", function () {
            arr.shift();
            show(arr);
        })
    }

    function delRight() {
        var rightOut = document.getElementById("right-out");
        rightOut.addEventListener("click", function () {
            arr.pop();
            show(arr);
        })
    }
    function show(arr) {
        var items = document.getElementById("items");
        var clientH = items.clientHeight;
        var innerHTML = "";
        for(var i = 0; i < arr.length; i++) {
            innerHTML += "<div style='width:12px; height:" + arr[i] + "px; left:" + (4 + i * 5) +"px; top:" + (clientH-arr[i]) + "px'></div>";

        }
        //最多只能60个div
        if(arr.length > 61) {
            return;
        }
        items.innerHTML = innerHTML;

    }
    function init() {
        addLeft();
        addRight();
        delLeft();
        delRight();
    }

    init();
}
