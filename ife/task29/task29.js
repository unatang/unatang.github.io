/**
 * Created by lyon on 2016/12/22.
 */
window.onload = function () {
    var input = document.getElementById("input");
    var tip = document.getElementById("tip");
    var button = document.getElementById("button");
    button.onclick = verrify;

    function verrify() {
        var inputValue= input.value;
        var len = inputValue.trim().replace(/[^\x00-\xff]/g, 'aa').length;
        if(len>=1 && len<=3) {
            tip.innerHTML = "格式错误";
            tip.style.color = "red";
            input.style.border = "2px solid red";
        } else if(len>=4 && len<=16) {
            tip.innerHTML = "格式正确";
            tip.style.color = "green";
            input.style.border = "2px solid green"
        } else {
            tip.innerHTML = "姓名不能为空";
            tip.style.color = "red";
            input.style.color = "2px solid red";
        }
    }

}