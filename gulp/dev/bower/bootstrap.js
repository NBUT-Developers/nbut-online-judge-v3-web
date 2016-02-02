/**
 * XadillaX created at 2016-02-02 15:12:29 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const gulp = require("gulp");
const plugins = require("gulp-load-plugins")();

const config = require("../../config");

gulp.task("bootstrap_js_dev", () => {
    return gulp.src(`${config.srcBowerPath}/bootstrap/dist/js/*.js`)
        .pipe(gulp.dest(`${config.devAssetsPath}/js`))
        .pipe(plugins.size());
});

gulp.task("bootstrap_css_dev", () => {
    return gulp.src(`${config.srcBowerPath}/bootstrap/dist/css/*.css`)
        .pipe(gulp.dest(`${config.devAssetsPath}/css`))
        .pipe(plugins.size());
});

gulp.task("bootstrap_font_dev", () => {
    return gulp.src(`${config.srcBowerPath}/bootstrap/dist/fonts/*`)
        .pipe(gulp.dest(`${config.devAssetsPath}/fonts`))
        .pipe(plugins.size());
});

gulp.task("bootstrap_dev", [ "bootstrap_js_dev", "bootstrap_css_dev", "bootstrap_font_dev" ]);
