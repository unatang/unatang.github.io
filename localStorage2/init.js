/**
 * Created by lyon on 2017/8/1.
 */

function init() {
    var inputs = document.getElementsByTagName("input");
    var msg = document.getElementsByClassName("msg");
    var add = document.getElementById("add");
    var show = document.getElementById("show");
    if(!localStorage.getItem("books")) {
        localStorage.setItem("books", "[]");
    }
    var storageData = takeStorage("books");

    check(inputs, msg);
    addBtn(add, inputs, show);
    tableShow(storageData, show);
    search(show);
    modify(inputs, show);
    deleteData(show);
}

init();