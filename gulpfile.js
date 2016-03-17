var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('.')
    .pipe(webserver({
      port: '8000',
      host: '0.0.0.0',
      directoryListing: true,
      fallback: 'index.html'
    }));
});
