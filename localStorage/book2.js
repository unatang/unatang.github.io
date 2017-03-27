/**
 * Created by lyon on 2017/3/20.
 */
window.onload = function () {
    var inputs = document.getElementsByTagName("input");
    var add = document.getElementById("add");
    add.addEventListener("click", function () {
        var books;
        if(localStorage.hasOwnProperty("books") == false) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
            //console.log(typeof books);
        }
        var value = {
            "name": inputs[0].value,
            "type": inputs[1].value,
            "price": inputs[2].value
        }
        //console.log(value.name);
        if(value.name == "" || value.type == "" || value.price == "") {
            alert("请将姓名, 商品, 价格填写完整。");
        } else {
            books.push(value);
        }
        localStorage.setItem("books", JSON.stringify(books)); //localStorage存储必须存储字符串
        loadAll();
    });
    function loadAll() {
        var list = document.getElementById("list");
        var books = JSON.parse(localStorage.getItem("books")); // json字符串转换为对象 返回值必须要清楚
        //console.log(books); //[object, object];
        if (books == null) { //第一次 空 报错， return 返回不执行渲染
            return;
        }
        if (books.length == 0) {  //books是空数组 被删完
            list.innerHTML = "";
            return;
        }
        var innerHTML = "<table id='table'>";
        innerHTML += "<tr><td>书名</td><td>分类</td><td>单价</td>";
        for(var i = 0; i < books.length; i++) {
            innerHTML += "<tr><td>" + books[i]["name"]
                + "</td><td><input type='text' value='" + books[i]["type"]
                + "'</td><td><input type='text' value='" + books[i]["price"]
                + "'</td><td><button books_id =" + i + " name='delete'>删除</button></td>"
                + "<td><button modify_id= " + i + " name='modify'>修改</button></td></tr>";
        }
        innerHTML += "</table>";
        list.innerHTML = innerHTML;
        deleted();
        modify();
    }

    function deleted() {
        var table = document.getElementById("table");
        //var books = JSON.parse(localStorage.getItem("books")); // json转换为对象
        table.addEventListener("click", function(e) {
            if(e.target && e.target.name == "delete") {
                var books = JSON.parse(localStorage.getItem("books")); // json转换为对象
                var books_id = parseInt(e.target.getAttribute("books_id"));
                books.splice(books_id, 1);
                localStorage.setItem("books", JSON.stringify(books));
                loadAll();
            }
        });
    }
    function modify() {
        var table = document.getElementById("table");
        table.addEventListener("click", function (e){
           if(e.target && e.target.name == "modify") {
               var books = JSON.parse(localStorage.getItem("books"));
               //console.log(books[0]["type"]);
               var modify_id = parseInt(e.target.getAttribute("modify_id")); //解析出数字
               console.log(e.target.getAttribute("modify_id"));
               var inputArr = e.target.parentNode.parentNode.getElementsByTagName("input");
               //console.log(inputArr[0].value);
               var type = inputArr[0].value;
               var price = inputArr[1].value;
               var book = books[modify_id];
               //console.log(book);
               if(book["type"] === type && book["price"] === price) {
                   return;
               }
               if(book["type"] !== type) {
                   book["type"] = type;
               };
               if(book["price"] !== price) {
                   book["price"] = price;
               }
               //console.log(book);
               localStorage.setItem("books", JSON.stringify(books));
               loadAll();
           }
        });
    }
    
    function search() {
        var searchBtn = document.getElementById("search-btn");
        searchBtn.addEventListener("click", function () {
           var shopName = document.getElementsByName("shop-name")[0].value;
           //console.log(typeof(shopName));
            var books = JSON.parse(localStorage.books);
            //console.log(books[1]["name"]); //string类型
            var arr = [];
            arr = arr.concat(books);  //复制books
            //console.log(arr);
            var newArr = [];
            for(var i = 0; i < arr.length; i++) {
                if(arr[i]["name"] === shopName) {
                   newArr.push(arr[i]);
                }
            }
            if (newArr.length == 0) {
                alert("没有查找到");
            } else {
                searchLoad(newArr);
            }
        });
    }

    function searchLoad(arr) {
        var searchList = document.getElementById("search-list");
        var innerHTML = "<table>";
        for(var i = 0; i < arr.length; i++) {
            innerHTML += "<tr><td>" + arr[i]["name"]
                      + "</td><td>" + arr[i]["type"]
                      + "</td><td>" + arr[i]["price"]
                       + "元</td></tr>"
        }
        innerHTML += "</table>";
        searchList.innerHTML = innerHTML;
    }
    loadAll();
    search();

}