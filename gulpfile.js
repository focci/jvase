// Load plugins
var gulp = require('gulp');
var	sass = require('gulp-ruby-sass');
var	autoprefixer = require('autoprefixer');
var	nano = require('gulp-cssnano');
var	postcss = require('gulp-postcss');
var	cssnext  = require('postcss-cssnext');
var	imagemin = require('gulp-imagemin');
var	concat = require('gulp-concat');
var rename = require('gulp-rename');
var	notify = require('gulp-notify');
var	base64 = require('gulp-base64');
var	del = require('del');

// Styles
gulp.task('styles', function() {
	return sass('./src/index.scss')
		.pipe(concat('jvase.css'))
		.pipe(postcss([
			autoprefixer({
				browsers: [
					'last 2 versions',
					'last 2 Chrome versions',
					'> 20%',
					'> 20% in US',
					'ie >= 9',
					'Firefox >= 20',
					'iOS 7'
				]
			})
			// ,cssnext
		]))
		.pipe(base64())
		.pipe(gulp.dest('./dist'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(nano())
		.pipe(gulp.dest('./dist'))
		.pipe(notify({
			message: 'Styles task complete'
		})
	);
});

// Images
gulp.task('images', function() {
	return gulp.src('./src/images/**/*')
		.pipe(imagemin({
			optimizationLevel: 7,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('./dist/images'))
		.pipe(notify({
			message: 'Images task complete'
		}));
});

// Clean
gulp.task('clean', function() {
	return del(['./dist/*.css']);
});

// Default task
gulp.task('default', function() {
	gulp.start('styles');
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['default']);
});