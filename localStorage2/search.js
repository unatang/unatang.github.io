/**
 * Created by lyon on 2017/8/1.
 */

function search(show) {
    var search = document.getElementById("search");
    var searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function () {
        var books = takeStorage("books");
        var value = search.value;

        var arr = [];
        arr = arr.concat(books);  //复制books
        var newArr = [];
        for(var i = 0; i < books.length; i++) {
            if(books[i]["name"] === value) {
                newArr.push(books[i]);
            }
        }
        if (newArr.length == 0) {
            alert("没有查找到");
        } else {
            tableShow(newArr, show);
        }
    });
}