/**
 * XadillaX created at 2015-12-01 16:35:32 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let gulp = require("gulp");

require("./dev/jade");
require("./dev/bower_components");
require("./dev/images");
require("./dev/less");

gulp.task("build-dev", [
    "dev-jade",
    "dev-bower-components",
    "dev-images",
    "dev-less"
]);

gulp.task("watch", [ "build-dev" ], () => {
    gulp.watch(`${global.SRC_PATH}views/**/*.jade`, [ "dev-jade" ]);
    gulp.watch(`${global.SRC_PATH}assets/**/*.{jpg,png,gif}`, [ "dev-images" ]);
    gulp.watch(`${global.SRC_PATH}assets/less/**/*.less`, [ "dev-less" ]);
});
