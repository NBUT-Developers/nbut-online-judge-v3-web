/**
 * XadillaX created at 2016-02-02 13:32:51 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const gulp = require("gulp");
const config = require("../config");

require("./bower");
require("./image");
require("./less");

gulp.task("dev", [ "bower_dev", "image_dev", "less_dev" ]);

gulp.task("watch", [ "dev" ], () => {
    gulp.watch(`${config.srcAssetsPath}/**/*.less`, [ "less_dev" ]);
    gulp.watch(`${config.srcAssetsPath}/**/*.{jpg,png,gif}`, [ "image_dev" ]);
});
