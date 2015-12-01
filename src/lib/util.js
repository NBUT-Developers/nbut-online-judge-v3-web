/**
 * XadillaX created at 2015-12-01 15:34:27 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

var util = require("util");

/**
 * getCtrlHelper
 * @param {String} name the helper name
 * @return {Object} the helper object
 */
util.getCtrlHelper = function(name) {
    return require("helper/controller/" + name.toLowerCase());
};

module.exports = util;
