var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('js/*.js')
    .pipe(connect.reload());
});


gulp.task('watch', function() {
  gulp.watch(["*.html"], ["html"]);
  gulp.watch(["css/*.css"], ["css"]);
  gulp.watch(["js/*.js"], ["js"]);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('default', ['connect', 'watch']);
