/**
 * Created by lyon on 2017/3/29.
 */
function bookName() {
    inputs[0].onfocus = function () {
        msg[0].innerHTML = "<p>输入书本名字</p>"
        inputs[0].style.color = "red";
        inputs[0].style.borderColor = "red";
    }
    inputs[0].onblur = function () {
        var value = inputs[0].value;
        if(value === "") {
            msg[0].innerHTML = "<p>内容为空，请输入书名</p>";
            inputs[0].style.color = "red";
            inputs[0].style.borderColor = "red";
        } else {
            var books = JSON.parse(localStorage.getItem("books")); // json字符串
            if(books === null) {
                alert("onenoen");
            } else {
                for(var i = 0; i < books.length; i++) {
                    if(books[i]["name"] === value) {
                        msg[0].innerHTML = "<p>已经有相同书本名字</p>"
                        inputs[0].style.color = "red";
                        inputs[0].style.borderColor = "red";
                        inputs[0].value = "";

                    } else {
                        msg[0].innerHTML = "<p>格式正确</p>";
                        msg[0].style.color = "lightgreen";
                        inputs[0].style.color = "lightgreen";
                        inputs[0].style.borderColor = "lightgreen";
                    }
                }
            }
        }

    }
}
function price() {
    inputs[2].onfocus = function () {
        msg[2].innerHTML = "<p>请输入1-1000之间的数字</p>";
        inputs[2].style.color = "red";
        inputs[2].style.borderColor = "red";
    }
    inputs[2].onblur = function () {
        var value = inputs[2].value;
        var reg =/^\d{1,9}$/;
        if(value === "") {
            msg[2].innerHTML = "<p>内容为空，请输入数字</p>";
            inputs[2].style.color = "red";
            inputs[2].style.borderColor = "red";
        } else if(!(reg.test(value))) {
            msg[2].innerHTML = "<p>请输入数字好吗</p>";
            msg[2].style.color = "red";
            inputs[2].style.color = "red";
            inputs[2].style.borderColor = "red";
            inputs[2].value = "";

        } else {
            msg[2].innerHTML = "<p>格式正确</p>";
            msg[2].style.color = "lightgreen";
            inputs[2].style.color = "lightgreen";
            inputs[2].style.borderColor = "lightgreen";
        }
    }
}