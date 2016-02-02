/**
 * XadillaX created at 2016-02-02 14:25:25 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();

const config = require("../config");

gulp.task("less_dev", () => {
    gulp.src(`${config.srcAssetsPath}/less/**/*.less`)
        .pipe(plugins.less({
            paths: [
                `${config.srcAssetsPath}/less/includes`
            ]
        }))
        .pipe(gulp.dest(`${config.devAssetsPath}/css`))
        .pipe(plugins.size());
});
