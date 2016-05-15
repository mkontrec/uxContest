var gulp = require('gulp');
var flatten = require('gulp-flatten');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var annotate = require('gulp-ng-annotate');
var minifyHtml = require('gulp-htmlmin');
var fs = require('fs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('move', function(){

	gulp.src(['./src/index.html'])
	.pipe(minifyHtml({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'));

	gulp.src(['!./src/index.html', './src/**/*.html'])
	.pipe(minifyHtml({collapseWhitespace: true}))
	.pipe(flatten())
	.pipe(gulp.dest('./dist/templates'));

});

gulp.task('scripts', function(){

	gulp.src(['./src/app.js', './src/**/*.js'])
	.pipe(annotate())
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));

});

gulp.task('buildVendorJS', function(){

	var dependencies = JSON.parse(fs.readFileSync('./dependencies.json'));

	gulp.src(dependencies.scripts)
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('./dist/js'));

});

gulp.task('sass', function(){

	gulp.src('./src/assets/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(cleanCSS())
	.pipe(gulp.dest('./dist/css'));

});

gulp.task('serve', function(){

	gulp.src('./dist')
	.pipe(webserver({
		port: 48080,
		livereload: true,
		open: 'http://localhost:48080/'
	}));

});

gulp.task('watch', ['serve'], function(){

	//	Run tasks on start
	gulp.start(['scripts', 'move', 'sass', 'buildVendorJS']);

	gulp.watch(['./src/**/*.js'], ['scripts']);
	gulp.watch(['./src/**/*.html'], ['move']);
	gulp.watch(['./src/assets/**/*.scss'], ['sass']);

	gulp.watch(['./dependencies.json'], ['buildVendorJS']);

});