"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");

gulp.task("sass", function () {
    return gulp
      .src("./sass/styles.scss")
      .pipe(concat("all.scss")) // concat the stream output in single file
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest("./css"));
  });

gulp.task("watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.series('sass'));
});
