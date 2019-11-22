var gulp = require('gulp'),
    sass = require('gulp-sass')

var paths = {
  sass: {
    sourceDir: './resources/sass/**/*.scss',
    source: './resources/sass/main.scss',
    dest: 'css/'
  },

  javascript: {
    source: [
      './resources/js/utilities/*.js',
      './resources/js/local/*.js'
    ],
    dest: 'javascript/'
  }
}

gulp.task('css:compile', function() {
    return gulp.src(paths.sass.source)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('sass:watch', () => {
  return gulp.watch(paths.sass.sourceDir, ['css:compile']);
});

gulp.task('watch', ['sass:watch']);

gulp.task('build', ['css:compile']);
