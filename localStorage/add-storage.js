/**
 * Created by lyon on 2017/7/30.
 */

function addStorage(storageName, storageMessage) {
    if(storageMessage == null) {
        return;
    }
    var message = JSON.parse(localStorage.getItem(storageName));
    message.push(storageMessage);
    localStorage.setItem(storageName, JSON.stringify(message));
    console.log("localStorage: " + localStorage );
}