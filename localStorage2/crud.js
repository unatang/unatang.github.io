/**
 * Created by lyon on 2017/8/1.
 */

function addBtn(add, inputs, show) {
    add.addEventListener("click", function () {
        // 获取input值
        var value = inputJudge(inputs);

        // 存储到localStorage
        addStorage("books", value);

        // 从localStorage中取出数据
        var getBooks = takeStorage("books");

        // 展示获取出的数据
        tableShow(getBooks, show);

        //删除数据 id
        deleteData(show);

        // 参数: id元素
        modify(inputs, show);

    }, false);
}

// 获取input值，判断为空补充完整
function inputJudge(inputs) {
    var value = {
        name: inputs[0].value,
        type: inputs[1].value,
        price: inputs[2].value
    };
    if(value.name == "" || value.type == "" || value.price == "") {
        alert("请将内容填写完整");
        return;
    }
    return value;
}

// 展示数据
function tableShow(showData, show) {
    var innerHTML = "<table id='table'>";
    innerHTML += "<tr><td>书名</td><td>分类</td><td>单价</td></tr>";
    for(var i = 0; i < showData.length; i++) {
        innerHTML += "<tr><td>" + showData[i]["name"]
            + "</td><td><input type='text' value='" + showData[i]["type"]
            + "'</td><td><input type='text' value='" + showData[i]["price"]
            + "'</td><td><button books_id =" + i + " name='delete'>删除</button></td>"
            + "<td><button modify_id= " + i + " name='modify'>修改</button></td></tr>";
    }
    innerHTML += "</table>";
    show.innerHTML = innerHTML;

    deleteData(show);
}


// delete数据
function deleteData(show) {
    var table = document.getElementById("table");
    table.addEventListener("click", function(e) {
        if(e.target && e.target.name == "delete") {
            var books_id = parseInt(e.target.getAttribute("books_id"));
            // console.log(books_id);
            var books = takeStorage("books");
            // splice 返回删除的元素
            books.splice(books_id, 1);

            save(books);
            var getBooks = takeStorage("books");
            tableShow(getBooks, show);
        }
    });

}


// 修改保存数据
function modify(inputs, show) {
    var table = document.getElementById("table");
    table.addEventListener("click", function(e) {
        if(e.target && e.target.name == "modify") {
            var books = takeStorage("books");
            var books_id = parseInt(e.target.getAttribute("books_id"));
            // 获取 要修改的值
            var inputArr = e.target.parentNode.parentNode.getElementsByTagName("input");
            var type = inputArr[books_id]["type"].value;
            var price = inputArr[books_id]["price"].value;

        }
    });
}