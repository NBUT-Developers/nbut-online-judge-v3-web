/**
 * XadillaX created at 2016-02-02 13:35:55 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const fs = require("fs");

const gulp = require("gulp");

const filenames = fs.readdirSync(__dirname);
const tasks = filenames.reduce(function(tasks, filename) {
    if("index.js" === filename || !filename.endsWith(".js")) return tasks;

    filename = filename.substr(0, filename.length - 3);
    require(`./${filename}`);
    tasks.push(`${filename}_dev`);
    return tasks;
}, []);

gulp.task("bower_dev", tasks);
