var gulp = require('gulp');
var wrap = require('gulp-wrap');

gulp.task('sayHello', function () {
   console.log('hello');
});


gulp.task('build', function(){
  gulp.src("pages/*.html")
      .pipe(wrap({src:"layout/default.html"}))
      .pipe(gulp.dest("dist"));
});
