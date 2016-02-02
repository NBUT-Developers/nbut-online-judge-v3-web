/**
 * XadillaX created at 2016-02-02 14:17:24 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();

const config = require("../config");

gulp.task("image_dev",() => {
    return gulp.src(`${config.srcAssetsPath}/images/**/*.{jpg,png,gif}`)
        .pipe(gulp.dest(`${config.devAssetsPath}/images`))
        .pipe(plugins.size());
});
