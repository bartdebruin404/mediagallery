"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var clean = require("gulp-clean");
var concat = require("gulp-concat");

gulp.task("clean-dist", function () {
  return gulp.src('./dist', {read: false})
      .pipe(clean());
});

gulp.task("sass", function () {
  return gulp
    .src("./sass/styles.scss")
    .pipe(concat("all.scss")) // concat the stream output in single file
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("img", function () {
  return gulp
    .src("./img/**/*.*")
    .pipe(gulp.dest("./dist/img"));
});

gulp.task("scripts", function () {
    return gulp
      .src("./scripts/**/*.*")
      .pipe(concat("main.js")) // concat the stream output in single file
      .pipe(gulp.dest("./js"));
  });

gulp.task("watch", function () {
  gulp.watch("./sass/**/*.scss", gulp.series('sass'));
  gulp.watch("./scripts/**/*.js", gulp.series('scripts'));
});
