/**
 * Created by lyon on 2017/8/2.
 */

// 参数: array input  array msg
function check(inputs, msg) {
    onfocus(inputs, msg);
    onblur(inputs, msg);
}
// 参数: inputs , 具体展示msg
function onfocus(inputs, msg) {
    if(inputs[0]) {
        inputs[0].onfocus = function () {
            msg[0].innerHTML = "请输入书本名字";
            msg[0].style.color = "red";
        };
    }
    if(inputs[1]) {
        inputs[1].onfocus = function () {
            msg[1].innerHTML = "请输入书本类型";
            msg[1].style.color = "red";
        };
    }
    if(inputs[2]) {
        inputs[2].onfocus = function () {
            msg[2].innerHTML = "请输入1-1000的数字!";
            msg[2].style.color = "red";
        };
    }
}

function onblur(inputs, msg) {

    if(inputs[0]) {
        inputs[0].onblur = function () {
            var name = inputs[0].value.trim();
            var books = takeStorage("books");
            if(name === "") {
                msg[0].innerHTML = "不要为空！";
                msg[0].style.color = "red";
                inputs[0].style.color = "red";
                inputs[0].style.borderColor = "red";
                inputs[0].value = "";
            }else {
                msg[0].innerHTML = "格式正确！";
                msg[0].style.color = "lightgreen";
                inputs[0].style.color = "lightgreen";
                inputs[0].style.borderColor = "lightgreen";

            }
            for(var i = 0; i < books.length; i++) {
                if(books[i]["name"] === name) {
                    msg[0].innerHTML = "不要输入重复名字！";
                    msg[0].style.color = "red";
                    inputs[0].style.color = "red";
                    inputs[0].style.borderColor = "red";
                    inputs[0].value = "";
                }
            }


        }
    }

    if(inputs[1]) {
        inputs[1].onblur = function () {
            // 获取数组对象属猪
            var books = takeStorage("books");
            var type = inputs[1].value.trim();
            if(type === "") {
                msg[1].innerHTML = "请输入书本类型，不要空着!";
                msg[1].style.color = "red";
            } else {
                msg[1].innerHTML = "格式正确!";
                msg[1].style.color = "green";
            }
        }
    }

    if(inputs[2]) {
        var price = inputs[2].value.trim();
        inputs[2].onblur = function () {
            inputs[2].value = inputs[2].value.trim();
            var value = inputs[2].value;
            if(value === "") {
                msg[2].innerHTML = "<p>内容为空，请输入数字</p>";
                inputs[2].style.color = "red";
                inputs[2].style.borderColor = "red";
            } else {
                var reg = /\D+/;
                if (reg.test(value)) {  //字符串是否包含非数字字符
                    msg[2].innerHTML = "<p>请输入数字好吗</p>";
                    msg[2].style.color = "red";
                    inputs[2].style.color = "red";
                    inputs[2].style.borderColor = "red";
                    inputs[2].value = "";
                } else {
                    var num = parseInt(value);
                    if(num > 0 && num < 1000) {
                        msg[2].innerHTML = "<p>格式正确</p>";
                        msg[2].style.color = "lightgreen";
                        inputs[2].style.color = "lightgreen";
                        inputs[2].style.borderColor = "lightgreen";
                    } else {
                        msg[2].innerHTML = "<p>数字必须在0-1000之间</p>";
                        inputs[2].value = "";
                        msg[2].style.color = "red";
                        inputs[2].style.color = "red";
                        inputs[2].style.borderColor = "red";
                    }
                }
            }
        }
    }
}


