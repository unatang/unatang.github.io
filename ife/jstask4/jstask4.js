/**
 * Created by lyon on 2017/4/9.
 */
window.onload = function() {
    var arr = []; //公用存取数组

    function inputValue() {
        var input = document.getElementById("text"); //input
        var value = input.value; //获取Input值给 value
        input.value = "";        //此时可设置为空，方便下次输入
        if(isNaN(parseInt(value))) {
            alert("请输入数字");
            return;
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
            }
            arr.push(value);
            show(arr);
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
        var innerHTML = "";
        for(var i = 0; i < arr.length; i++) {
            innerHTML += "<p>" + arr[i] + "</p>";

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
