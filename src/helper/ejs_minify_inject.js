/**
 * XadillaX created at 2015-12-01 17:05:45 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";
let ejs = require("ejs");
let minify = require("html-minifier").minify;

let logger = require("lib/logger").get("ejs-minifier");

/**
 * __express
 */
ejs.__express = (...args) => {
    let callback = args.pop();

    args.push((err, data) => {
        if(err) return callback(err);

        callback(null, minify(data, {
            removeAttributeQuotes: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true,
            caseSensitive: true,
            collapseWhitespace: true
        }));
    });

    ejs.renderFile.apply(ejs, args);
};

logger.info("EJS Minifier injected.");
