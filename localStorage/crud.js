/**
 * Created by lyon on 2017/3/29.
 */
function addBtn(add, inputs) {
    console.log(inputs);
    add.addEventListener("click", function () {
        var value = {
            "name": inputs[0].value,
            "type": inputs[1].value,
            "price": parseInt(inputs[2].value)
        };
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
        //console.log(value.name);
        if(value.name == "" || value.type == "" || value.price == "") {
            alert("请将姓名, 商品, 价格填写完整。");
        } else {
            // books.push(value);
            addStorage("books", value);

            console.log("one: " + localStorage.books);
        }
        var getBooks = takeStorage("books");
        console.log("getBooks: " + getBooks);
        loadAll(getBooks);
        sortPrice();
    });
}


function loadAll(arr) {
    console.log("Arr: " + arr);
    var list = document.getElementById("list");
    //console.log(books); //[object, object];
    if (arr == null) { //第一次 空 报错， return 返回不执行渲染
        return;
    }
    if (arr.length == 0) {  //books是空数组 被删完
        list.innerHTML = "";
        return;
    }
    var innerHTML = "<table id='table'>";
    innerHTML += "<tr><td>书名</td><td>分类</td><td>单价</td></tr>";
    for(var i = 0; i < arr.length; i++) {
        innerHTML += "<tr><td>" + arr[i]["name"]
            + "</td><td><input type='text' value='" + arr[i]["type"]
            + "'</td><td><input type='text' value='" + arr[i]["price"]
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
            // var books = JSON.parse(localStorage.getItem("books")); // json转换为对象
            var books = takeStorage("books");
            var books_id = parseInt(e.target.getAttribute("books_id"));
            books.splice(books_id, 1);
            // localStorage.setItem("books", JSON.stringify(books));
            addStorage("books");
            // var getBooks = JSON.parse(localStorage.getItem("books")); // json字符串转换为对象 返回值必须要清楚
            var getBooks = takeStorage("books");
            loadAll(getBooks);
        }
    });
}
function modify() {
    var table = document.getElementById("table");
    table.addEventListener("click", function (e){
        if(e.target && e.target.name == "modify") {
            // var books = JSON.parse(localStorage.getItem("books"));
            var books = takeStorage("books");
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
            // localStorage.setItem("books", JSON.stringify(books));

            var getBooks = takeStorage("books");
            // var getBooks = JSON.parse(localStorage.getItem("books")); // json字符串转换为对象 返回值必须要清楚
            loadAll(getBooks);
        }
    });
}


function search() {
    var searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", function () {
        var value = document.getElementById("shop-name").value.trim();
        var shopName = value;
        //console.log(typeof(shopName));
        // var books = JSON.parse(localStorage.books);
        var books = takeStorage("books");
        //console.log(books[1]["name"]); //string类型
        var arr = [];
        arr = arr.concat(books);  //复制books
        //console.log(arr);
        var newArr = [];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i]["name"].search(shopName) !== -1) {
                newArr.push(arr[i]);
            }
        }
        if (newArr.length == 0) {
            alert("没有查找到");
        } else {
            loadAll(newArr);
        }
    });
}