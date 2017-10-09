const gulp = require('gulp');
const eslint = require('gulp-eslint');
const buffer = require('gulp-buffer');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const del = require('del');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();

gulp.task('clean', () => {
  del(['./build/**/*.*']);
});

gulp.task('style', () => {
  return gulp.src([
    './src/**/*.js',
    './*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('static', () => {
  return gulp.src('./static/**/**')
    .pipe(gulp.dest('./build'));
});

gulp.task('phaser', () => {
  return gulp.src(['./node_modules/phaser/build/phaser.min.js', './node_modules/phaser-plugin-isometric/dist/phaser-plugin-isometric.min.js'])
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('build', ['phaser'], () => {
  return browserify({
    entries: './src/client/index.js',
    debug: true
  })
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify()).on('error', (err) => {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./build/scripts'))
    .pipe(browserSync.stream());
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    browser: 'chrome'
  });
  gulp.watch('./src/**/*.js', ['build']).on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'static', 'style', 'build', 'serve']);
