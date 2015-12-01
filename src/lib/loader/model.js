/**
 * XadillaX created at 2015-12-01 15:36:00 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let fs = require("fs");
let path = require("path");
let util = require("util");

let logger = require("lib/logger").get("model-loader");
let ROOT = `${__DOC_ROOT}/src/model/`;

let _models = {};

/**
 * load
 * @param {String} file the file path
 */
function load(file) {
    let directory = path.join(ROOT, file);
    let filenames = fs.readdirSync(directory);

    if(!global.__REPL) logger.debug(`Get files in "${file}".`, filenames);
    for(let filename of filenames) {
        let stat = fs.statSync(`${directory}/${filename}`);
        if(stat.isDirectory()) {
            if(!global.__REPL) logger.debug(`Change directory: ${file}/${filename}`);
            load(`${file}/${filename}`);
        } else {
            if(filename.endsWith(".js")) {
                let modelName = filename.substr(0, filename.length - 3).toLowerCase();
                _models[modelName] = require(`${directory}/${filename}`);
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
util.getModel = (name) => {
    name = name.toLowerCase();
    if(_models[name]) return _models[name];
    throw new Error("No such model " + name + ".");
};
