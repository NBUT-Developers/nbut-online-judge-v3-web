/**
 * XadillaX created at 2015-12-05 15:57:39 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let path = require("path");

let gulp = require("gulp");
let plugins = require("gulp-load-plugins")();

gulp.task(
    "dev-less",
    () => gulp.src(`${global.SRC_PATH}assets/less/**/*.less`)
        .pipe(plugins.less({
            paths: [
                path.join(__dirname, "../../f2e/src/assets/", "less", "includes")
            ]
        }))
        .pipe(gulp.dest(`${global.DEV_PATH}assets/css`))
        .pipe(plugins.size()));
