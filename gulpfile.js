var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var path = require('path');
var url = require('url');
var fs = require('fs');
//var list = require('./data/list.json')

//新建任务
gulp.task('copy', function() {
        return gulp.src(['./src/js/**/*.js', '!./src/js/module/*.js'])
            .pipe(gulp.dest('./buile/js'))
    })
    //编译scss
gulp.task('minscss', function() {
        return gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
    })
    //监听scss
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('minscss'))
})

gulp.task('webserver', function() {
        return gulp.src("src")
            .pipe(webserver({
                port: 3333, //设置端口号
                open: true, //自动打开浏览器
                livereload: true //自动更新
                    // host: '192.168.0.221',//配置 IP
                    // fallback: 'list.html'  //制定默认打开文件
                    // middleware: function(req, res, next) {
                    //     var pathname = url.parse(req.url).pathname;
                    //     if (pathname === '/favicon.ico') {
                    //         res.end('')
                    //         return;
                    //     }
                    //     if (pathname === '/api/list') {
                    //         res.end(JSON.stringify({
                    //             code: 0,
                    //             data: list
                    //         }))
                    //     } else {
                    //         pathname = pathname === '/' ? 'index.html' : pathname;
                    //         res.end(fs.readFileSync(path.join(__dirname, "src", pathname)))
                    //     }


                // }
            }))
    })
    //开发环境
gulp.task('dev', gulp.series('minscss', 'webserver', 'watch'))