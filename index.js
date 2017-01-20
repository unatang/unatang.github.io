/**
 * Created by lyon on 2017/1/20.
 */
$(function () {

    //绑定页面滚动事件
    $(window).bind('scroll',function(){
        var len=$(this).scrollTop()
        if(len>=100){
            //显示回到顶部按钮
            $('.menu-up').show();
        }else{
            //影藏回到顶部按钮
            $('.menu-up').hide();
        }
    })
    //绑定回到顶部按钮的点击事件
    $('.menu-up').click(function(){
        //动画效果，平滑滚动回到顶部
        //$(document).animate({ scrollTop: 0 });
        //不需要动画则直接
        $(document).scrollTop(0)
    })
    
    });