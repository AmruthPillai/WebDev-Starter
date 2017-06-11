const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Static Server + Watching SCSS/JS/HTML files
gulp.task('serve', ['copy', 'sass', 'minify-js', 'minify-html', 'imagemin'], function() {

  browserSync.init({
    server: './app'
  });

  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['minify-js']);
  gulp.watch('src/images/*', ['imagemin']);
  gulp.watch('src/*.html', ['minify-html']).on('change', browserSync.reload);
});

// Copy jQuery, Tether and Bootstrap Libraries to 'app' folder
gulp.task('copy', ['jquery_copy', 'tether_copy', 'bootstrap_copy']);

const jquery_src = ['node_modules/jquery/dist/jquery.min.js'];
const jquery_dest = 'app/lib/jquery/';
gulp.task('jquery_copy', function() {
  return gulp.src(jquery_src)
    .pipe(gulp.dest(jquery_dest));
});

const tether_src = ['node_modules/tether/dist/css/tether.min.css', 'node_modules/tether/dist/js/tether.min.js'];
const tether_dest = 'app/lib/tether/';
gulp.task('tether_copy', function() {
  return gulp.src(tether_src)
    .pipe(gulp.dest(tether_dest));
});

const bootstrap_src = ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/js/bootstrap.min.js'];
const bootstrap_dest = 'app/lib/bootstrap/';
gulp.task('bootstrap_copy', function() {
  return gulp.src(bootstrap_src)
    .pipe(gulp.dest(bootstrap_dest));
});

// Compile Sass to CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

// Uglify/Minify Javascript
gulp.task('minify-js', function() {
  return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(browserSync.stream());
});

// Minify HTML
gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

// Optimize & Minify Images
gulp.task('imagemin', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/images'))
    .pipe(browserSync.stream());
});

// Clean app folder from old files
gulp.task('clean', function() {
  return del([
    'app'
  ]);
});

// Default 'gulp' task, to start Server
gulp.task('default', ['serve']);
