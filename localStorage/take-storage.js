/**
 * Created by lyon on 2017/7/30.
 */

function takeStorage(storageName) {
    // getItem()里面需要的是字符串, storageName 传入时会给字符串类型
    var getBooks = JSON.parse(localStorage.getItem(storageName));
    if(getBooks.length == 0) {
        return getBooks = [];
    } else {
        return getBooks;
    }
}