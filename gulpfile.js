/**
 * Created by lyon on 2017/1/25.
 */
var gulp = require("gulp");
var less = require("gulp-less"); //less编译
var concat = require("gulp-concat");
var conncet = require("gulp-connect"); //静态服务器
var plumber = require("gulp-plumber"); //处理管道崩溃问题
var notify = require("gulp-notify"); //报错与不中断当前任务
var livereload = require("gulp-livereload"); //自动刷新


//les编译
gulp.task("less", function () {
    console.log("less task");
    gulp.src("less/common.less") //找到需要编译的less文件
    //如果less文件中有语法错误，用notify插件报错，用plumber保证任务不会停止
        .pipe(plumber({errorHandler: notify.onError("Error:<%= error.message %>")}))
        .pipe(less()) //如果没错误， 就编译less
        .pipe(concat("task6.css"))  //把编译后的css合并为一个，名字是happyasyou
        .pipe(gulp.dest("./css/"))  //把css文件放到css文件夹下
        .pipe(livereload());  //重载/刷新页面
});
console.log("less task");


//监听less文件
gulp.task("watchLess", function () {
    //监听所有less文件，如果有变化,则执行less编译方法
    gulp.watch(["less/*.less"],["less"]);
});

//使用connect启动静态服务器
gulp.task("startServer", function () { //任务名称不要有空格
    conncet.server({
        livereload:true,port: 9000  //端口号
    });
});

//默认任务
gulp.task("default",function () {
    console.log("this is a new test page");
    gulp.start("startServer");  //启动一个web服务器
});

gulp.task("clear", function () {
    //清除缓存，或者说，重新加载所有html文件
    gulp.src("*.html")
        .pipe(conncet.reload());
});

gulp.task("watchHtml", function () {
    //监听所有html文件，如果有变化，则执行清除缓存方法
    gulp.watch(["*,html"],["html"]);
});

//把监听任务追加到启动服务器任务中
//新建一个任务列表，把监听任务与服务器任务都放在列表中
gulp.task("taskList", ["startServer", "watchHtml", "watchLess"]);
gulp.task("default", function () {
    gulp.start("taskList"); //执行任务列表
});
