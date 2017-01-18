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

    var ai = []; //[1,2,3,....]
    function paint() {
        var innerHTML = "";
        for(var i=0; i<ai.length; i++) {
           innerHTML += "<span data-i='" + i + "'>" + ai[i] + "</span>";
    }
        container.innerHTML = innerHTML;
    }

    container.addEventListener("click", function (e) {
        console.log(e.target);
        var i = e.target.getAttribute("data-i");
        console.log("i: " + i);
        if(i != null) {
            i = parseInt(i);
            ai.splice(i, 1);
            paint()
        }
    }, false);
    container.addEventListener()

    leftIn.onclick = function () {
        if(numInput.value == "") {
            alert("请不要为空");
        } else if (isNaN(parseInt(numInput.value))) {
            alert("请写数字")
        } else {
            var text = numInput.value.trim();
            ai.unshift(text);
            paint();
        }
    }
    rightIn.onclick = function () {
        if(numInput.value == "") {
            alert("请不要为空");
        } else if (isNaN(parseInt(numInput.value))) {
            alert("请写数字")
        } else {
            var text = numInput.value.trim();
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