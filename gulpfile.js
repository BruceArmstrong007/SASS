const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');



function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}


function watchTask() {
    watch(["antui/**/*.scss", 'sass/**/*.scss', '*.html'], buildStyles)
}

function build() {
    return src('antui/**/*.scss')
        .pipe(dest('dist'))
}

exports.build = build;
exports.default = series(buildStyles, watchTask);