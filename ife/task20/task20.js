window.onload = function () {
    var textarea = document.getElementById("textarea");
    var inputIn = document.getElementById("input-in");
    var button = document.getElementsByTagName("button");
    var container = document.getElementById("container");

    var ai = [];
    function paint(filter) {
        if(typeof filter == "undefined") {  //没有参数 给默认值空数组
            filter = [];
        }
        innerHTML = "";
        for(var i=0; i<ai.length; i++) {
            if(filter.indexOf(i) == -1) {
                innerHTML += "<div>" + ai[i] + "</div>";
            } else {
                innerHTML += "<div style='background-color: red'>" + ai[i] + "</div>";
            }
            container.innerHTML = innerHTML;
        }
    }
    /* arr为数组
       item为string
       找到包含下标的数字返回给数组
       没找到返回-1
    */
    function search(arr, item) {
        var list = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i].indexOf(item) != -1){
                list.push(i);
            } else if(list.length == 0 && i == arr.length-1) {
                return -1;
            }
        }
        return list;
    }


    button[0].onclick = function () {
        var text = textarea.value.trim();
        var arrWord = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e) {
            if (e != null && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });
        for(var i=0; i<arrWord.length; i++) {
            ai.unshift(arrWord[i]);
            console.log(ai);
        }
        paint();

    }
    button[1].onclick = function () {
        var text = inputIn.value.trim();
        console.log(typeof text == "string");
        var j = search(ai,text);
        if(j == -1) {
            alert("没有找到");
        } else {
            paint(j);
        }
    }
}