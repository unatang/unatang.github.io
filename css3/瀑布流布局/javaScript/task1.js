window.onload = function () {
    waterfall("main", "box");
    var dataInt = {"data": [{"src": "2.jpg"},{"src": "3.jpg"},{"src": "4.jpg"},{"src": "12.jpg"},{"src": "13.jpg"},]}
    window.onscroll = function () {
        if(checkScrollSlide) {
            var main = document.getElementById("main");
            //将数据块渲染到页面尾部
            for(var i=0; i<dataInt.data.lenth; i++) {
                var oBox = document.createElement("div");
                oBox.className = "box";
                main.appendChild(oBox);
                var pic = document.createElement("div");
                pic.className = "pic";
                oBox.appendChild(pic);
                var img = document.createElement("img");
                img.src= "../images/" + "dataInt.data[i].src";
                pic.appendChild(img);
            }
        }
    }
}
function waterfall(parent, box) {
    var parent = document.getElementById(parent);
    var boxs = document.getElementsByClassName(box);
    //console.log(boxs);

    //列宽
    var boxsW = boxs[0].offsetWidth;
    //console.log(boxsW);
    //列数
    var cols = Math.floor(document.documentElement.clientWidth/boxsW);
    //设置mian宽度
    parent.style.cssText = "width: " + cols*boxsW + "px; margin: 0 auto";
    var hArray = []; //存放每列高度
    for(var i=0; i<boxs.length; i++) {
        if(i < cols) {
            hArray.push(boxs[i].offsetHeight); //第一行高度
        } else {
            var minH = Math.min.apply(null, hArray);  //第一行 最低高度
            var index = getMinIndex(hArray, minH);    //最低高度的下标
            boxs[i].style.position = "absolute";
            boxs[i].style.top = minH + "px";
            boxs[i].style.left = boxsW * index + "px";
            hArray[index] += boxs[i].offsetHeight;
        }
    }

}
function getMinIndex(arr, val) {
    for(var i in arr) {
        if(arr[i] == val) {
            return i;
        }
    }
}
//检测是否具备加载数块库条件
function checkScrollSlide() {
    var main = document.getElementById("main");
    //console.log(main);
    var boxs = document.getElementsByClassName(box);
    console.log(boxs);
    var oBoxs = getByClass(main, "box"); //获取所有class为box
    console.log("oBoxs:" + oBoxs);
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    //滚走距离 混杂模式 标准模式
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;
    return (lastBoxH < scrollTop + height) ? true : false;
}