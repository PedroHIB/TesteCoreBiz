"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

const path = {
  styles: {
    src: "./src/sass/**/",
    watch: "src/sass/**/*.scss",
  },
};

function getCurrentTimestamp() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `\x1b[35m[${hours}:${minutes}:${seconds}]\x1b[0m`;
}

async function sassFn() {
  gulp
    .src([
      "./src/sass/_vars.scss",
      "./src/sass/_sup.scss",
      "./src/sass/**/*.scss",
    ])
    .pipe(concat("app.scss"))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/css/"));

  console.log(getCurrentTimestamp() + " SASS Builded.");
}

gulp.task("workflow", sassFn);

gulp.task("watch", function () {
  gulp.watch(path.styles.watch).on("change", sassFn);
});

gulp.task("default", gulp.series("workflow", "watch"));
