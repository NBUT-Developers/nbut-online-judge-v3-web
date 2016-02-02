/**
 * XadillaX created at 2016-02-02 13:52:56 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();

const config = require("../../config");

gulp.task("bower_common_dev", () => {
    return gulp.src(`${config.srcBowerPath}/${config.srcBowerCommon}/**/*.{js,css,png,gif,jpg}`)
        .pipe(gulp.dest(`${config.devThirdPath}`))
        .pipe(plugins.size());
});
