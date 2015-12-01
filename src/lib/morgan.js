/**
 * XadillaX created at 2015-12-01 15:32:58 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let moment = require("moment");
let morgan = require("morgan");

morgan.token("date", () => moment().format("YYYY-MM-DD HH:mm:ss.SSS"));

module.exports = morgan("[:date[YYYY]] INFO EXPRESS - ".green +
        ":remote-addr - :remote-user \":method :url HTTP/:http-version\" :status " +
        ":res[content-length] \":referrer\" \":user-agent\" - :response-time ms");
