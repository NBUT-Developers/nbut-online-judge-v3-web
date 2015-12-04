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

gulp.task("build-dev", [
    "dev-jade",
    "dev-bower-components"
]);

gulp.task("watch", [ "build-dev" ], () => {
    gulp.watch(`${global.SRC_PATH}views/**/*.jade`, [ "dev-jade" ]);
});
