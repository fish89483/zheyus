var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages')
    // sass = require('gulp-sass'),
    // pug = require('gulp-pug'),
    // autoprefixer = require('gulp-autoprefixer'),
    // uglify = require('gulp-uglify'),
    // concat = require('gulp-concat'),
    // rename = require('gulp-rename'),

    gulp.task('deploy', function() {
        return gulp.src('dist/**/*')
          .pipe(ghPages());
      });