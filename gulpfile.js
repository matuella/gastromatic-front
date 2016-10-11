'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

const jsPath = "./app/js/**/*.js";
const outputPath = "./app/dist/";

gulp.task('browserify', function () {
    return browserify({entries: ['./app/js/app.js']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(outputPath));
});

//gulp.task('js', function() {
//	gulp.src(jsPath)
//	.pipe(concat('scripts.js'))
//	.pipe(uglify())
//	.pipe(gulp.dest(outputPath));
//});

gulp.task('watch', function () {
    gulp.watch(jsPath, ['browserify']);
});

gulp.task('default', ['browserify']);
gulp.task('watch', ['watch']);