/**
 * XadillaX created at 2015-12-02 10:20:38 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let gulp = require("gulp");
let plugins = require("gulp-load-plugins")();

gulp.task(
    "dev-bower-components",
    () => gulp.src("./bower_components/**/*.{js,css,png,svg,ttf,woff,eot,otf,woff2}")
        .pipe(gulp.dest(`${global.DEV_PATH}assets/bower_components/`))
        .pipe(plugins.size()));
