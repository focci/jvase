var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('autoprefixer');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var base64 = require('gulp-base64');
var cfg = require('./config');
var pkg = require('../package.json');

// assets
gulp.task('assets', function() {
    gulp.src(get_target_dir('assets')+'**/*').pipe(
        gulp.dest(get_dest_dir('assets'))
    );
});

// styles
gulp.task('styles', function() {
    var tasks = sass(get_target_dir('styles') + cfg.styles.entry)
        .pipe(concat(pkg.name + '-' + pkg.version + '.css'));
    
    if (cfg.styles.autoprefixer.enabled) {
        tasks = tasks.pipe(
            postcss([
                autoprefixer(cfg.styles.autoprefixer.options)
            ])
        );
    }
    if (cfg.styles.base64) {
        tasks = tasks.pipe(base64());
    }
    if (cfg.styles.uglify) {
        tasks = tasks.pipe(nano());
    }
	tasks.pipe(gulp.dest(get_dest_dir('styles')));
	tasks.pipe(gulp.dest('../../jvase-doc/docs/static'));
});

var gulpItems = ['assets', 'styles'];

// default task
gulp.task('default', function() {
    gulp.start(gulpItems);
});

// watch
gulp.task('watch', function() {
   
    gulp.watch([
        get_target_dir('assets') + '**/*',
        get_target_dir('styles') + '**/*.scss'
    ], gulpItems);
});

//
function get_dest_dir (name) {
    return cfg.dest_dir + cfg[name].dest_dir + '/';
}

//
function get_target_dir (name) {
    return cfg.target_dir + cfg[name].target_dir + '/';
}
