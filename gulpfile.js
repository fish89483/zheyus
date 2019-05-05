var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect');
// gulpLivereload = require('gulp-livereload')
var path = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/css/*.css',
    srcSass: ['src/sass/**/*.scss', 'src/sass/**/*.sass'],
    srcPug: 'src/pug/*.pug',
    srcJS: 'src/js/*.js',

    tmpCss: 'src/css',

    dist: 'dist/',
    distIndex: 'dist/index.html',
    distCSS: 'dist/css',
    distJS: 'dist/js'
}

var concatPath = {
    css: [
        path.srcCSS
    ],
    js: [
        'node_modules/**/jquery.min.js',
        'node_modules/**/jquery.mousewheel.js',
        'src/js/min/*.min.js'
    ]

}



// 建立預設 gulp task
gulp.task('html', function() {
    return gulp.src(path.srcPug)
        .pipe(pug({
            // pretty: true 
        }))
        .pipe(gulp.dest(path.dist))
        .pipe(connect.reload());
    // .pipe(gulpLivereload())
})

gulp.task('sass', function() {
    return gulp.src(path.srcSass)
        .pipe(sass({
            // outputStyle: 'compressed'
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        // .pipe(gulp.dest(path.tmpCss));
        // .pipe(concat('main.css'))
        // .pipe(hash()) // Add hashes to the files' names
        // .pipe(gulp.dest('dist/css')) // Write the renamed files
        // .pipe(hash.manifest('assets.json'))
        .pipe(gulp.dest(path.distCSS))
        .pipe(connect.reload());
    // .pipe(gulpLivereload())


});
// concat
gulp.task('concat-js', function() {
    return gulp.src(concatPath.js)
        .pipe(concat('main.js'))
        // .pipe(hash()) // Add hashes to the files' names
        // .pipe(gulp.dest('dist/js')) // Write the renamed files
        // .pipe(hash.manifest('assets.json'))
        .pipe(gulp.dest(path.distJS))
        .pipe(connect.reload());
    // .pipe(gulpLivereload())
})

// gulp.task('concat-css', function () {
//     return gulp.src(concatPath.css)
//         .pipe(concat('main.css'))
//         .pipe(hash()) // Add hashes to the files' names
//         .pipe(gulp.dest('dist/css')) // Write the renamed files
//         .pipe(hash.manifest('assets.json'))
//         .pipe(gulp.dest(path.distCSS))
// })

gulp.task('uglify', function() {
    return gulp.src(path.srcJS)
        // .pipe(uglify())
        .pipe(rename({
            dirname: '',
            suffix: ".min"
        }))
        .pipe(gulp.dest('src/js/min/'));
})


// gulp.task('scripts', function () {
//     return gulp.src(concatPath.js)
//         .pipe(rename({
//             dirname: ''
//         }))
//         .pipe(gulp.dest(path.distJS));
// })

// gulp.task('styles', gulp.series('sass', 'concat-css'))

gulp.task('scripts', gulp.series('uglify', 'concat-js'))
gulp.task('styles', gulp.series('sass'))

gulp.task('img', function() {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/'))
})

// gulp.task('inject', function () {
//     var target = gulp.src('./src/pug/test.pug');
//     // It's not necessary to read the files (will speed up things), we're only after their paths:
//     var sources = gulp.src(['./dist/js/*.js', './dist/css/*.css'], {
//         read: false
//     });

//     return target.pipe(inject(sources))
//         .pipe(gulp.dest('./src/pug'));
// })
gulp.task('server', function() {
    connect.server({
        root: '',
        livereload: true
    });
});
// watch
gulp.task('watch', function() {
    // gulpLivereload.listen();
    gulp.parallel('connect')
    gulp.watch(path.srcSass, gulp.series('styles'));
    gulp.watch(path.srcJS, gulp.series('scripts'));
    gulp.watch(path.srcPug, gulp.series('html'));
});

gulp.task('connect', gulp.parallel('server', 'watch'))
    //start
gulp.task('start', gulp.series('styles', 'scripts', 'html', 'img', 'connect'));
// gulp.task('start', gulp.series('styles', 'scripts', 'inject', 'html'))

gulp.task('build', gulp.series('styles', 'scripts', 'html', 'img'));
// gulp.task('hash', function () {
//     return gulp.src('./dist/js/**/*.js')
//         .pipe(hash()) // Add hashes to the files' names
//         .pipe(gulp.dest('dist/js')) // Write the renamed files
//         .pipe(hash.manifest('dist/assets.json'))
//         .pipe(gulp.dest('.')); // Write the manifest file (see note below)
// })
gulp.task('deploy', function() {
    return gulp.src('dist/**/*')
        .pipe(ghPages());
});