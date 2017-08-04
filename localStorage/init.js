/**
 * Created by lyon on 2017/3/29.
 */
function init() {
    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    var add = document.getElementById("add");
    var msg = document.getElementsByClassName("msg");  //显示div

    if(localStorage.hasOwnProperty("books") == false){
        var books = [];
        books = JSON.stringify(books);
        localStorage.setItem("books", books);
        var books = JSON.parse(localStorage.getItem("books"));
        console.log("init: " + books);
        return books;
    }

    // var books = JSON.parse(localStorage.getItem("books"));

    addBtn(add, inputs);
    searchPrice();
    sortPrice();
    loadAll(books);
    search();
    bookName(msg, inputs);
    price(msg, inputs);
}

init();