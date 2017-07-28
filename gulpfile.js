/**
 * Created by lyon on 2017/1/25.
 */
var gulp = require("gulp");
// var concat = require("gulp-concat");
// var conncet = require("gulp-connect"); //静态服务器
// var plumber = require("gulp-plumber"); //处理管道崩溃问题
// var notify = require("gulp-notify"); //报错与不中断当前任务
// var livereload = require("gulp-livereload"); //自动刷新
var fileinclude  = require('gulp-file-include');

//分离文件
gulp.task("fileinclude", function () {
    gulp.src(['./src/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest("dist/"));
});
//css 压缩
gulp.task('minifycss',function() {
    var cssSrc = './src/css/*.css',
        cssDst = './dist/css';
    return gulp.src(cssSrc)                  //被压缩的文件
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())                       //执行压缩
        .pipe(gulp.dest(cssDst));        //输出文件夹
});

// js处理
gulp.task('uglify',function () {
    var jsSrc = './src/js/*.js',
        jsDst ='./dist/js';
    return gulp.src(jsSrc)
    /*.pipe(jshint('.jshintrc'))
     .pipe(jshint.reporter('default'))*/
    // .pipe(concat('main.js'))
    // .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});
//html 处理
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    var htmlSrc = './src/html/*.html',
        htmlDst = './dist/html';
    gulp.src(htmlSrc)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(htmlDst));//同名的html,会直接替换
});

// clean被执行时,先清空对应目录下图片、样式、js
gulp.task('clean',function() {
    return gulp.src(['./dist/css', './dist/js'], {read: false})
        .pipe(clean());
});

//watch
// gulp.watch('./src/css/*.css', ['minifycss']);
gulp.task('watch',function(){
    //css
    gulp.watch('./src/css/*.css', ['minifycss']);
    //css
    gulp.watch('./src/js/*.js', ['uglify']);
    //css
    gulp.watch('./src/*.html', ['htmlmin']);
});
// 默认预设任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'],function(){
    gulp.start('minifycss','uglify','htmlmin','watch');
});