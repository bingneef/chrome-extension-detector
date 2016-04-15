// LOAD STUFF
var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var clean = require("gulp-clean");


// DEFAULT
gulp.task('default', ['clean'], function () {
  gulp.start('coffee');
});

gulp.task('coffee', function () {
  var c = coffee();
  c.on('error',function(e){
    gutil.log(e);
    c.end();
    gulp.src('').pipe(notify('Error coffeescript\n' + new Date()));
  });
  return gulp.src('src/**/*.coffee')
    .pipe(c)
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
      .pipe(clean());
})
