var gulp = require('gulp');
var	sass = require('gulp-ruby-sass');
var	autoprefixer = require('autoprefixer');
var	nano = require('gulp-cssnano');
var	postcss = require('gulp-postcss');
var	concat = require('gulp-concat');
var tempos = require('gulp-tempos');
var	notify = require('gulp-notify');
var fs = require('fs');
var data = require('gulp-data');

// 样式
gulp.task('styles', function() {
	return sass('./src/index.scss')
		.pipe(concat('jvase.min.css'))
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
		]))
		.pipe(nano())
		.pipe(gulp.dest('./dist'))
		.pipe(gulp.dest('./docs/styles'))
		.pipe(notify({
			message: 'Styles task complete'
		})
	);
});

// 文档
var webConfig = {
	index: {
		title: 'Jvase',
		slideFlag: false	// 是否显示左边菜单
	},
	doc: {
		title: 'Documentation Jvase',
		slideFlag: true
	}
};

gulp.task('doc', function() {
	return gulp.src('./docs/template/*.temp')
		.pipe(data((file) => {
			return webConfig[ file.relative.replace('.temp', '') ];
		}))
		.pipe(tempos(null, {
			extname: '.html'
		}))
		.pipe(gulp.dest('./docs'))
		.pipe(notify({
			message: 'Doc task complete'
		}));
});

gulp.task('default', function() {
	gulp.start(['styles', 'doc']);
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.*', ['styles']);
});