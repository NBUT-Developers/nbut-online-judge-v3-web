/**
 * XadillaX created at 2015-12-01 15:36:00 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var fs = require("fs");
var path = require("path");
var util = require("util");

var logger = require("lib/logger").get("model-loader");
var ROOT = __DOC_ROOT + "/src/model/";

var _models = {};

/**
 * load
 * @param {String} file the file path
 */
function load(file) {
    var directory = path.join(ROOT, file);
    var filenames = fs.readdirSync(directory);

    if(!global.__REPL) logger.debug("Get files in \"" + file + "\".", filenames);

    for(var i = 0; i < filenames.length; i++) {
        var stat = fs.statSync(directory + "/" + filenames[i]);
        if(stat.isDirectory()) {
            if(!global.__REPL) logger.debug("Change directory: " + file + "/" + filenames[i]);
            load(file + "/" + filenames[i]);
        } else {
            if(filenames[i].endsWith(".js")) {
                var modelName = filenames[i].substr(0, filenames[i].length - 3).toLowerCase();
                _models[modelName] = require(directory + "/" + filenames[i]);
            }
        }
    }
}

module.exports = load;

/**
 * getModel
 * @param {String} name the model name
 * @return {Model} the model
 */
util.getModel = function(name) {
    name = name.toLowerCase();
    if(_models[name]) return _models[name];
    throw new Error("No such model " + name + ".");
};
