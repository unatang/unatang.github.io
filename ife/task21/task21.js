/**
 * Created by lyon on 2016/12/30.
 */
window.onload = function () {
    //Tag 第一个输入框
    var inputIn = document.getElementById("input-in");
    var textarea = document.getElementById("textarea");
    var showTag = document.getElementById("show-tag");
    //兴趣爱好确认按钮
    var btnHobby = document.getElementById("btn-hobby");
    var container = document.getElementById("container");

    var ai = [];
    var bi = [];

    function tag0ne() {   /* 渲染函数 */
        var innerHTML = "";
        for(var i=0; i<bi.length; i++) {
            innerHTML += "<div data-i='" + i + "'>" + bi[i] + "</div>";
            //console.log(innerHTML);
        }
       showTag.innerHTML = innerHTML;
    }

    function paint() {   /* 渲染函数 */
        var innerHTML = "";
        for(var i=0; i<ai.length; i++) {
            innerHTML += "<div data-i='" + i + "'>" + ai[i] + "</div>";
        }
        container.innerHTML = innerHTML;
    }

    showTag.addEventListener("click", function(e) {   /* tag点击函数 */
        //console.log(e.target);
        var i = e.target.getAttribute("data-i");
        if(i !== null) {
            var i = parseInt(i);
            bi.splice(i,1);
            tag0ne();
        }
    }, false);
    showTag.addEventListener("mouseenter", function (e) {  /* tag mouseover函数 */
        var text = e.target.textContent;
        console.log(e.target.getAttribute("data-i"));
        if(e.target.getAttribute("data-i")) {
            text = "删除" + text;
            e.target.textContent = text;
            // var i = e.target.getAttribute("data-i");
            // if(i !== null) {
            //     var i = parseInt(i);
            //     bi.splice(i,1,text);
            //     console.log("bi" + bi);
            //     tag0ne();
            // }
        }
    }, true);

    showTag.addEventListener("mouseout", function (e) {   /* tag mouseout函数 */
        var text = e.target.textContent;
        text = text.substr(2);
        var i = e.target.getAttribute("data-i");
        if(i !== null) {
            var i = parseInt(i);
            bi.splice(i, 1, text);
            console.log("bi" + bi);
            tag0ne();
        };

    }, false);

    /* tag-one */
    inputIn.addEventListener("keyup", function (e) {
        if(e.keyCode == 13) {
            var text = inputIn.value.trim();
            inputIn.value = "";
                //console.log("text: " + text);
            var arrWord = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function (e) {
                if (e != null && e.length > 0) {
                    return true;
                } else {
                    return false;
                }
            });
            for (var i = 0; i < arrWord.length; i++) {
                if (bi.length <= 9) {
                    bi.push(arrWord[i]);
                } else {
                    bi.pop();
                    bi.unshift(arrWord[i]);
                }
            }
            //console.log("ai: " + ai);
            tag0ne();
        }
    }, false);

    /* textare */
    btnHobby.addEventListener("click", function () {  /*btnHobby 事件*/
        var text = textarea.value.trim();
        textarea.value = "";
        // console.log("text: " + text);
        var arrWord = text.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(e) {
            if (e != null && e.length > 0) {
                return true;
            } else {
                return false;
            }
        });

        for(var i=0; i<arrWord.length; i++) {
            if(ai.indexOf(arrWord[i]) !== -1) {
                //console.log("下标地址: " + ai.indexOf(arrWord[i]));
                arrWord[i] = "";
            } else if(ai.indexOf(arrWord[i]) == -1) {
                if(ai.length <= 9) {
                    ai.push(arrWord[i]);
                } else {
                    ai.pop();
                    ai.unshift(arrWord[i]);
                }
            }
            paint();
        }
    });
}
