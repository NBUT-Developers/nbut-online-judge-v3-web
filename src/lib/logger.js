/**
 * XadillaX created at 2015-12-01 15:27:37 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

const COLORS = {
    ERROR: "red",
    WARN: "magenta",
    INFO: "green",
    VERBOSE: "gray",
    DEBUG: "blue",
    SILLY: "grey"
};

var colors = require("colors");
var config = require("config");
var moment = require("moment");
var winston = require("winston");
winston.addColors(COLORS);

var Logger = winston.Logger;
var Console = winston.transports.Console;

var _loggers = {};

/**
 * get
 * @param {String} name the logger name
 * @return {Logger} the winston log object
 */
exports.get = function(name) {
    name = name.toUpperCase();
    if(_loggers[name]) return _loggers[name];

    var logger = new Logger({
        transports: [
            new Console({
                level: "silly",
                timestamp: function() {
                    return Date.now();
                },
    
                formatter: function(options) {
                    var time = "[" + moment(options.timestamp()).format("YYYY-MM-DD HH:mm:ss.SSS") + "]";
                    var level = options.level.toUpperCase();
                    var prefix = time + " " + level + " " + name + " - ";
                    var surfix = " " + JSON.stringify(options.meta);
                    if(" {}" === surfix) surfix = "";

                    if(COLORS[level]) {
                        prefix = colors[COLORS[level]](prefix);
                        surfix = colors[COLORS[level]](surfix);
                    }

                    return prefix + options.message + (options.meta ? surfix : "");
                }
            })
        ]
    });

    _loggers[name] = logger;

    if(process.env.NODE_ENV === "test") {
        logger = {
            error: function() {},
            warn: function() {},
            info: function() {},
            verbose: function() {},
            debug: function() {},
            silly: function() {}
        };
    }

    return logger;
};

if(config.server.env === "dev") {
    var __log = console.log.bind(console);
    var toshihikoLogger = exports.get("toshihiko");

    console.log = function() {
        if(typeof arguments[0] !== "string") {
            return __log.apply(null, arguments);
        }

        var temp = arguments[0] || "";
        if(temp.indexOf("❤️") === 0) {
            toshihikoLogger.silly(arguments[0].substr(2));
        } else {
            __log.apply(null, arguments);
        }
    };
}
