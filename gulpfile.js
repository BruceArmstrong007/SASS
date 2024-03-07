const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss');



function GenerateCSS() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

function watchSASS() {
    watch(["antui/**/*.scss", 'sass/**/*.scss', '*.html'], GenerateCSS)
}



function build() {
    return src('antui/**/*.scss')
        .pipe(dest('dist'))
}



function buildCSS() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('dist'))
}

exports.build = series(buildCSS, build);
exports.default = series(GenerateCSS, watchSASS);