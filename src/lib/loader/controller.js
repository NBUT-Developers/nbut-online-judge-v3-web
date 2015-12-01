/**
 * XadillaX created at 2015-12-01 15:35:15 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var fs = require("fs");
var path = require("path");

var express = require("express");

var logger = require("lib/logger").get("ctrl-loader");
var ROOT = __DOC_ROOT + "/src/controller/";

/**
 * loadController
 * @param {String} root the router root path
 * @param {Function} m the router function loader
 */
function loadController(root, m) {
    var router = express.Router({
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
    var directory = path.join(ROOT, file);
    var filenames = fs.readdirSync(directory);

    logger.debug("Get files in \"" + file + "\".", filenames);
    for(var i = 0; i < filenames.length; i++) {
        var stat = fs.statSync(directory + "/" + filenames[i]);
        if(stat.isDirectory()) {
            logger.debug("Change directory: " + file + "/" + filenames[i]);
            load(file + "/" + filenames[i]);
        } else {
            if(filenames[i].endsWith(".js")) {
                loadController(file + "/" + filenames[i],
                        require(directory + "/" + filenames[i]));
            }
        }
    }
}

module.exports = load;
