var gulp = require('gulp'),
    jade = require('gulp-jade'),
    del = require('del'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon');

var IN = "www/",
    OUT = "www-build/";
gulp.task('clean', function(cb) {
    del(OUT, cb);
});

gulp.task('jade', ['clean'], function() {
    gulp.src(IN + "**/*.jade")
        .pipe(watch(IN + "**/*.jade"))   
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(OUT))
});
gulp.task('images', ['clean'], function () {
    gulp.src(IN + "images/**")
        .pipe(gulp.dest(OUT + "images"));
})

gulp.task('js', ['clean'], function () {
    gulp.src([IN + "**/*.js"])
        .pipe(watch([IN + "**/*.js"]))
        .pipe(plumber())
        .pipe(gulp.dest(OUT));   
});

gulp.task('css', ['clean'], function () {
    gulp.src([IN + "**/*.css"])
        .pipe(watch([IN + "**/*.css"]))
        .pipe(plumber())
        .pipe(gulp.dest(OUT));
});

gulp.task('build', ['jade', 'css', 'js', 'images']);

gulp.task('serve', ['build'], function() {
    nodemon({
        script: 'server.js',
        watch: 'server.js'
    });
});

gulp.task('dev', ['build','serve']);

