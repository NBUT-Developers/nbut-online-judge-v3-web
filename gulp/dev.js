/**
 * XadillaX created at 2015-12-01 16:35:32 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let gulp = require("gulp");

require("./dev/jade");

gulp.task("build-dev", [
    "dev-jade"
]);
