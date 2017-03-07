/**
 * Created by lyon on 2017/3/6.
 */
window.onload = function () {
    var text = document.getElementById("text");
    var items = document.getElementById("items");
    var leftIn = document.getElementById("left-in");
    var arr = [];
    leftIn.addEventListener("click", function () {
        if(isNaN(parseInt(text.value))) {
            alert("请输入数字");
        } else {
            var a = parseInt(text.value);
            arr.unshift(a);
            var innerHTML = "";
            for(var i = 0; i < arr.length; i++) {
                innerHTML += "<p>" + arr[i] + "</p>";
            }
            items.innerHTML = innerHTML;
            console.log([id="left-in"]);
        }
    }, false);
    var rightIn = document.getElementById("right-in");
    rightIn.addEventListener("click",function () {
        if(isNaN(parseInt(text.value))) {
            alert("请输入数字");
        } else {
            var a = parseInt(text.value);
            arr.push(a);
            var innerHTML = "";
            for(var i = 0; i < arr.length; i++) {
                innerHTML += "<p>" + arr[i] + "</p>";
            }
            items.innerHTML = innerHTML;
        }
    },false)
    function render(btn) {
        btn.addEventListener("click", function () {
            if(isNaN(parseInt(text.value))) {
                alert("请输入数字");
            } else {
                if([id="left-in"]) {
                    arr.unshift(parseInt(text.value));
                } else {
                    var innerHTML = "";
                    for(var i = 0; i < arr.length; i++) {
                        innerHTML += "<p>" + arr[i] + "</p>";
                    }
                    items.innerHTML = innerHTML;
                }
            }
        }, false)
    }

    var leftOut = document.getElementById("left-out");
    leftOut.addEventListener("click", function () {
        if(arr.length != 0) {
            var a = arr.shift();
            alert("删除: " + a);
            var innerHTML = "";
            for(var i = 0; i < arr.length; i++) {
                innerHTML += "<p>" + arr[i] + "</p>"
                console.log(innerHTML);
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
                innerHTML += "<p>" + arr[i] + "</p>";
            }
            items.innerHTML = innerHTML;
        }
    },false)
}