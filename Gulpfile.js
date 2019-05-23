const gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer"),
  minify = require("gulp-minifier"),
  babel = require("gulp-babel");

// Static server
gulp.task(
  "browserSync",
  gulp.series(done => {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    done();
  })
);

gulp.task(
  "prefix",
  gulp.series(done => {
    gulp
      .src("css/**/*.css")
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"],
          cascade: false
        })
      )
      .pipe(gulp.dest("dist"));
    browserSync.reload();

    done();
  })
);

gulp.task(
  "styles",
  gulp.series(done => {
    gulp
      .src("sass/**/*.sass")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./css/"));
    done();
  })
);

gulp.task(
  "mini",
  gulp.series(done => {
    gulp
      .src("**/*")
      .pipe(
        minify({
          minify: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyJS: true,
          minifyCSS: true,
          getKeptComment: function(content, filePath) {
            var m = content.match(/\/\*![\s\S]*?\*\//gim);
            return (m && m.join("\n") + "\n") || "";
          }
        })
      )
      .pipe(gulp.dest("example/dest"));
    done();
  })
);

// Babel
gulp.task(
  "babel",
  gulp.series(done => {
    gulp
      .src("./script.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
    done();
  })
);

//Watch task
gulp.task(
  "watch",
  gulp.series("styles", "prefix", "browserSync", function() {
    gulp.watch("sass/**/*.sass", gulp.series("styles"));
    gulp.watch("css/**/*.css", gulp.series("prefix"));
    gulp.watch("*.html", gulp.series(browserSync.reload));
    gulp.watch("*.js", gulp.series(browserSync.reload));
  })
);
