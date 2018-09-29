'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
    return gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());

    //     gulp.src('styles/main.scss')
    //   .pipe(sass({style: 'expanded'}))
    //     .on('error', gutil.log)
    //   .pipe(gulp.dest('assets'))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/main.scss', ['sass']);
    gulp.watch('**/*.html', ['html']);
});

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('html', function () {
    gulp.src('**/*.html')
        .pipe(connect.reload())
});

gulp.task('default', ['html', 'sass', 'connect', 'watch']);