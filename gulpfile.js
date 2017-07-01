var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');

gulp.task('default', function() {
  gulp.src('templates/**.html')
  .pipe(nunjucks.compile())
  .pipe(gulp.dest('./'))
})
