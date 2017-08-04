/**
 * Created by lyon on 2017/8/1.
 */
function addStorage(storageName, storageData) {
    var books = takeStorage(storageName);
    if(storageData == null) {
        return
    } else {
        books.push(storageData);
        save(books);
    }
}

function save(books) {
    localStorage.setItem("books", JSON.stringify(books));
}

function amend() {
    
}