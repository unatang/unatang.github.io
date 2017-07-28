/*定义两个变量，保存当前页码和上一页页码*/
var $index=0;
var $exdex=0;
/*小点的鼠标移入事件，触发图片左移还是右移*/
$(".choose span").mouseover(function(){
    //获取当前移入的index值
    $index=$(this).index();
    //首先让点的颜色变化，表示选中
    $(".choose span").eq($index).addClass("red").siblings().
    removeClass("red");
    //判断如果index变小，证明图片要往左移动。变大则为右移
    if($index>$exdex){
        next();
    }else if($index<$exdex){
        pre();
    }
    //移动完毕将当前index值替换了前页index
    return $exdex=$index;
});
//下一页的点击事件。在右移基础上加了最大index判断
$(".next").click(function(){
    $index++;
    if($index>3){
        $index=0
    }
    $(".choose span").eq($index).addClass("red").siblings().
    removeClass("red");
    next();
    return $exdex=$index;
});
//上一页的点击事件
$(".pre").click(function(){
    $index--;
    if($index<0){
        $index=3
    };
    $(".choose span").eq($index).addClass("red").siblings().
    removeClass("red");
    pre();
    return $exdex=$index;
});
//加个定时器，正常轮播
var atime=setInterval(function(){
    $(".next").click();
},1000);
//这里为右移和左移的事件函数。
//右移基本原理就是先让exdex定位的left左移百分百，而选中的当前页从屏幕右边移入,left变为0
function next(){
    $(".banner a").eq($index).stop(true,true).
    css("left","100%").animate({"left":"0"});
    $(".banner a").eq($exdex).stop(true,true).
    css("left","0").animate({"left":"-100%"});
}
function pre(){
    $(".banner a").eq($index).stop(true,true).
    css("left","-100%").animate({"left":"0"});
    $(".banner a").eq($exdex).stop(true,true).
    css("left","0").animate({"left":"100%"});
}