var minify = require('gulp-minify');
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var ext_replace = require('gulp-ext-replace');

gulp.task('default', function() {
    gulp.src('src/*.js')
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'));
});