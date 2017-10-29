const gulp = require('gulp');
const eslint = require('gulp-eslint');
const buffer = require('gulp-buffer');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const del = require('del');
const source = require('vinyl-source-stream');
const babelify = require('babelify');
const browserify = require('browserify');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

gulp.task('style', () => {
  return gulp.src([
    './src/**/*.js',
    './*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('clean', () => {
  del(['build/**/*.*']);
});

gulp.task('static', ['clean'], () => {
  return gulp.src('./static/**/**')
    .pipe(gulp.dest('./build'));
});

gulp.task('libs', ['static'], () => {
  return gulp.src(['./node_modules/phaser/build/phaser.min.js',
    './node_modules/phaser-plugin-isometric/dist/phaser-plugin-isometric.js',
    './node_modules/socket.io-client/socket.io.min.js',
  ])
    .pipe(gulp.dest('./build/scripts'));
});

gulp.task('build', ['libs'], () => {
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

gulp.task('nodemon', ['build'], (cb) => {
  let running = false;

  return nodemon({
    script: 'server.js'
  }).on('start', () => {
    if (!running) {
      cb();
      running = true;
    }
  }).on('restart', () => {
    setTimeout(() => {
      browserSync.reload();
    }, 500);
  });
});

gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:8081',
    browser: 'chrome',
    port: 3000
  });
});

gulp.task('serve', ['browser-sync'], () => {
  gulp.watch('./src/**/*.*', ['build']).on('change', browserSync.reload);
  gulp.watch('./static/**/*', ['static']).on('change', browserSync.reload);
});


gulp.task('default', ['clean', 'style', 'libs', 'static', 'build', 'nodemon', 'browser-sync', 'serve']);

// Kill processes when running browserSync:
// netstat -ano | findstr :<PORT>
// taskkill //PID <PID #> //F