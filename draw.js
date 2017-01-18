/**
 * Created by lyon on 2016/12/19.
 */

window.onload = function () {
    var a = document.getElementsByClassName("blog-sidebar")[0].getElementsByTagName("a");
    // console.log(a[1]);
    var h1Text = document.getElementsByClassName("page-header")[0].getElementsByTagName("h1")[0];
    for(var i=1; i < a.length; i++){
        a[i].onclick = aHandle;
    }
    function aHandle() {
        var header = this.innerText;
        $.get('pages/' + header + '.txt', {
            title: header
        }, function (data, status) {
            console.log(data);
            $(".page-header:first").html("<h1>"  + header + "</h1>");
            $(".page-content:first").html(data);
        });
    }
}


