window.onload = function () {
    var input = document.getElementsByTagName("input")[0]; //找到input
    var show = document.getElementById("show"); //展示区
    var submit = document.getElementById("submit"); //验证按钮
    function init(){
        submit.onclick = validate;
    }

    function validate() {
        var len = textLength(input);
        if (len == 0) {
            show.innerHTML = '名称不能为空';
            show.style.color = 'red';
            input.style.borderColor="red";
        } else if (len >=4 && len <= 16) {
            show.innerHTML = '格式正确';
            show.style.color = 'lightgreen';
            input.style.borderColor='lightgreen';
        } else {
            show.innerHTML = '请输入长度为4~16位字符';
            show.style.color = 'red'
            input.style.borderColor = "red";
        }
    }
    function textLength(tag) {
        var inputValue = tag.value;
        var inputLength = 0;
        for (var i = 0; i < inputValue.length; i++) {
            var countCode = inputValue.charCodeAt(i);
            if (countCode >= 0 && countCode <=128) {
                inputLength += 1;
            } else {
                inputLength += 2;
            }
        }
        return inputLength;
    }
    init();
}