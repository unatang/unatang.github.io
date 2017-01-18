/**
 * Created by lyon on 2017/1/8.
 */
$(document).ready(function () {
    var ai = [];

    function paint() {
        var innerHTML = "";
        for(var i=0; i<ai.length; i++) {
           innerHTML += "<span data-i='" + i + "'>" + ai[i] + "</span>";
        }
        $("#container").html(innerHTML);
    }

    $("#container").click(function (e) {
        console.log(e.target);
        var i = e.target.getAttribute("data-i");
        console.log(i);
        i = parseInt(i);
        if(isNaN(i)) {
            alert("请点击数字");
        } else {
            ai.splice(i,1);
            paint();
        }
    });

    $("#left-in").click(function () {
        var text = $("#num-input").val();
        text = $.trim(text);
        // console.log(text);
        if(text == "") {
            alert("请输入内容");
        } else if(isNaN(parseInt(text))) {
            alert("请输入数字");
        } else {
            ai.unshift(text);
            // console.log(ai);
            paint();
        }
    });

    $("#right-in").click(function () {
        var text = $("#num-input").val();
        text = $.trim(text);
        if(text == "") {
            alert("请输入内容");
        } else if(isNaN(parseInt(text))) {
            alert("请输入数字");
        } else {
            ai.push(text);
            paint();
        }
    });
    
    $("#left-out").click(function () {
        ai.shift();
        paint();
    });

    $("#right-out").click(function () {
        ai.pop();
        paint();
    });

})