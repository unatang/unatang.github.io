/**
 * Created by lyon on 2017/4/6.
 */
function sortPrice() {
    var sortUpBtn = document.getElementById("sort-up-btn");
    var sortDownBtn = document.getElementById("sort-down-btn");
    // var books = JSON.parse(localStorage.getItem("books"));
    var books = takeStorage("books");
    // console.log("books: " + books);
    sortUpBtn.addEventListener("click", function () {
        books.sort(function (x, y) {
            x = x["price"];
            y = y["price"];
            if(x < y) {
                return -1;
            }
            if(x > y) {
                return 1;
            }
            return 0;
        });
        loadAll(books);
    });


    sortDownBtn.addEventListener("click", function () {
        books.sort(function (x, y) {
            x = x["price"];
            y = y["price"];
            if(x < y) {
                return 1;
            }
            if(x > y) {
                return -1;
            }
            return 0;
        });
        loadAll(books);
    });
}