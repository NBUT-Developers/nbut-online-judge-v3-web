/**
 * XadillaX created at 2015-12-05 15:50:23 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let gulp = require("gulp");
let plugins = require("gulp-load-plugins")();

gulp.task(
    "dev-images",
    () => gulp.src(`${global.SRC_PATH}assets/**/*.{jpg,png,gif}`)
        .pipe(gulp.dest(`${global.DEV_PATH}assets/`))
        .pipe(plugins.size()));
