/**
 * Created by lyon on 2017/8/1.
 */
function takeStorage(storageName) {
    var books = JSON.parse(localStorage.getItem(storageName));
    return books;

}