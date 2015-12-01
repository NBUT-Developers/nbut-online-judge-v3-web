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

let colors = require("colors");
let config = require("config");
let moment = require("moment");
let winston = require("winston");
winston.addColors(COLORS);

let Logger = winston.Logger;
let Console = winston.transports.Console;

let _loggers = {};

/**
 * get
 * @param {String} name the logger name
 * @return {Logger} the winston log object
 */
exports.get = name => {
    name = name.toUpperCase();
    if(_loggers[name]) return _loggers[name];

    let logger = new Logger({
        transports: [
            new Console({
                level: "silly",
                timestamp: function() {
                    return Date.now();
                },
    
                formatter: function(options) {
                    let time = "[" + moment(options.timestamp()).format("YYYY-MM-DD HH:mm:ss.SSS") + "]";
                    let level = options.level.toUpperCase();
                    let prefix = `${time} ${level} ${name} - `;
                    let surfix = " " + JSON.stringify(options.meta);
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
    let __log = console.log.bind(console);
    let toshihikoLogger = exports.get("toshihiko");

    console.log = (...args) => {
        if(typeof args[0] !== "string") {
            return __log.apply(null, args);
        }

        let temp = args[0] || "";
        if(temp.indexOf("❤️") === 0) {
            toshihikoLogger.silly(args[0].substr(2));
        } else {
            __log.apply(null, args);
        }
    };
}
