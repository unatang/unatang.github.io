/**
 * Created by lyon on 2017/3/7.
 */
window.onload = function () {
    var insert = document.getElementById("insert");
    var refer = document.getElementById("refer");
    var items = document.getElementById("items");
    var textarea = document.getElementById("textarea");   // insertText = "";
    var input = document.getElementById("input");
    var arr = [];

    function show(value) {
        var newArr = [];
        if(value.length > 1) {
            newArr = value.split(/[,\r、\s]/);
            for(var i = 0; i < newArr.length; i++) {
                if(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(newArr[i])) {
                    arr.push(newArr[i]);
                }
            }
        } else {
            if(/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(value)) {
                arr.push(value);
            } else {
                alert("请输入数字，英文，中文");
            }
        }
    }

    insert.addEventListener("click", function () {
        var value = textarea.value.trim();
        show(value);
        var innerHTML = "";
        for(var i = 0; i < arr.length; i++) {
            innerHTML += "<p>" + arr[i] + "</p>";
        }
        items.innerHTML = innerHTML;
    }, false);

    function search(arr, item) {
        var list = [];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i].indexOf(item) != -1) {
                list.push(i);
            } else if(list.length == 0) {
                return -1;
            }
        }
        return list;
    }
    
    refer.addEventListener("click", function () {
        var value = input.value.trim();
        var j = search(arr, value); //[0,2,3]找到元素的下标
        var innerHTML = "";
        for(var i = 0; i < arr.length; i++) {
            if(j.indexOf(i) != -1) {
                innerHTML += "<p style='background-color: black'>" + arr[i] + "</p>";
            } else {
                innerHTML += "<p style='background-color: red'>" + arr[i] + "</p>";
            }
        }
        items.innerHTML = innerHTML;
    }, false);

}