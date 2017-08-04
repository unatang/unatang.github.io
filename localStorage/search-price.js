/**
 * Created by lyon on 2017/3/30.
 */
function searchPrice() {
    var prices = document.getElementsByClassName("search-price");
    var priceMsg = document.getElementById("price-msg");
    var btn = document.getElementsByClassName("search-price-btn")[0];
    // var books = JSON.parse(localStorage.getItem("books")); //就是books
    var books = addStorage("books");
    btn.addEventListener("click", function () {
        var value1 = prices[0].value = prices[0].value.trim();
        var value2 = prices[1].value = prices[1].value.trim();
        var priceOne = value1;
        var priceTwo = value2;
        var arr = [];
        arr = arr.concat(books);  //复制了当前数据
        var newArr = [];
        var reg = /\D+/;  //0-9以外的数字
        if(!( reg.test(priceOne) || reg.test(priceTwo)) ) {
            priceOne = parseInt(priceOne);
            priceTwo = parseInt(priceTwo);
            if(priceTwo > priceOne) {
                for(var i = 0; i < arr.length; i++) {
                    if(priceOne < parseInt(books[i]["price"]) && priceTwo >= parseInt(books[i]["price"])) {
                        newArr.push(books[i]);
                    }
                }
                if(newArr.length > 0) {
                    loadAll(newArr);
                }
            } else {
                alert("请输入第二个数字大于第一个数字");
            }
        }else {
            alert("输入有误，请输入正确数字！");
        }

    });

}
