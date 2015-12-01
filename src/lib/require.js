/**
 * XadillaX created at 2015-12-01 15:24:20 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let fs = require("fs");
let path = require("path");
let Module = require("module");
let _resolveFilename = Module._resolveFilename.bind(Module);
let cache = {};

const SRC_PATH = path.resolve(__dirname, "../");

/**
 * _resolveFilename
 * @param {String} request the request path
 * @param {Object} parent the parent object
 * @return {*} the `_resolveFilename` return value
 */
Module._resolveFilename = (request, parent) => {
    if(!request.startsWith("./") && !request.startsWith("../")) {
        if(cache[request]) {
            request = cache[request];
        } else if(undefined === cache[request]) {
            // that is $PROJ_ROOT/src/
            let testRequest = path.resolve(SRC_PATH, request);

            let names = [
                testRequest,
                testRequest + ".js",
                testRequest + ".json",
                testRequest + "/index.js",
                testRequest + "/index.json"
            ];

            /**
             * because
             *
             *   > Stability: 0 - Deprecated: Use fs.statSync or fs.accessSync instead.
             *
             * so we use try...catch and statSync instead
             *
             * see https://nodejs.org/api/fs.html#fs_fs_existssync_path
             */
            cache[request] = false;
            for(let name of names) {
                try {
                    if(fs.statSync(name).isFile()) {
                        request = cache[request] = testRequest;
                        break;
                    }
                } catch(e) {
                    // ignore...
                }
            }
        }
    }

    return _resolveFilename(request, parent);
};
