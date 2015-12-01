/**
 * XadillaX created at 2015-12-01 16:37:43 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

gulp.task("dev-jade", function() {
    return gulp.src(global.SRC_PATH + "views/**/*.jade")
        .pipe(gulp.dest(global.BUILD_PATH + "views/"))
        .pipe(plugins.size());
});
