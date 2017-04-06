/**
 * Created by lyon on 2017/3/29.
 */
function init() {
    // var inputs = document.getElementsByTagName("input");
    // var add = document.getElementById("add");
    // var msg = document.getElementsByClassName("msg");  //显示div
    var books = JSON.parse(localStorage.getItem("books"));
    addBtn();
    searchPrice();
    sortPrice();
    loadAll(books);
    search();
    bookName();
    price();
}
var inputs = document.getElementsByTagName("input");
var add = document.getElementById("add");
var msg = document.getElementsByClassName("msg");  //显示div
init();