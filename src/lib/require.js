/**
 * XadillaX created at 2015-12-01 15:24:20 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var fs = require("fs");
var path = require("path");
var Module = require("module");
var _resolveFilename = Module._resolveFilename.bind(Module);
var cache = {};

var SRC_PATH = path.resolve(__dirname, "../");

/**
 * _resolveFilename
 * @param {String} request the request path
 * @param {Object} parent the parent object
 * @return {*} the `_resolveFilename` return value
 */
Module._resolveFilename = function(request, parent) {
    if(!request.startsWith("./") && !request.startsWith("../")) {
        if(cache[request]) {
            request = cache[request];
        } else if(undefined === cache[request]) {
            // that is $PROJ_ROOT/src/
            var testRequest = path.resolve(SRC_PATH, request);

            var names = [
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
            for(var i = 0; i < names.length; i++) {
                try {
                    if(fs.statSync(names[i]).isFile()) {
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
