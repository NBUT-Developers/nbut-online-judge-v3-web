/**
 * XadillaX created at 2015-12-01 15:35:15 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let fs = require("fs");
let path = require("path");

let express = require("express");

const logger = require("lib/logger").get("ctrl-loader");
const ROOT = `${__DOC_ROOT}/src/controller/`;

/**
 * loadController
 * @param {String} root the router root path
 * @param {Function} m the router function loader
 */
function loadController(root, m) {
    let router = express.Router({
        caseSensitive: true
    });

    // load functions to `router` object
    m(router);

    root = root.substr(0, root.length - 3);
    if(root.endsWith("/_")) {
        root = root.substr(0, root.length - 2);
    }

    // add `router` to the express instance
    global.oj.use(root, router);
}

/**
 * load
 * @param {String} file the file path
 */
function load(file) {
    let directory = path.join(ROOT, file);
    let filenames = fs.readdirSync(directory);

    logger.debug(`Get files in "${file}".`, filenames);
    for(let filename of filenames) {
        var stat = fs.statSync(`${directory}/${filename}`);
        if(stat.isDirectory()) {
            logger.debug(`Change directory: ${file}/${filename}`);
            load(`${file}/${filename}`);
        } else {
            if(filename.endsWith(".js")) {
                loadController(`${file}/${filename}`, require(`${directory}/${filename}`));
            }
        }
    }
}

module.exports = load;
