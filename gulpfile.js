let project_folder = "SmartNotes"
let source_folder = "#src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/styles/",
        js: project_folder + "/js/",
        img: project_folder + "/img",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/styles/style.css",
        js: source_folder + "/js/main.js",
        img: source_folder + "/img/**/*.{jpg,png,gif,svg,ico,webp}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/styles/**/*.css",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,gif,svg,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss')

function browserSync() {
    browsersync.init({
        server: {
            baseDir: `./${project_folder}/`
        },
        port: 5000,
        notify: false
    })
}

function css() {
    return src(path.src.css)
        .pipe(postcss([
            require('postcss-import'),
            require('autoprefixer'),
            require('postcss-csso'),
        ]))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(browsersync.stream())
        .pipe(dest(path.build.js))
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 4,
        }))
        .pipe(browsersync.stream())
}

function clean() {
    return del(path.clean);
}

function watchFiles() {
    gulp.watch([path.watch.html], html),
        gulp.watch([path.watch.css], css),
        gulp.watch([path.watch.js], js),
        gulp.watch([path.watch.img], images);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images));
let watch = gulp.parallel(build, browserSync, watchFiles);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;