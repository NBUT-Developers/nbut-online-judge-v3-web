/**
 * XadillaX created at 2015-12-01 14:39:30 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

require("sugar");
const config = require("config");
const bodyParser = require("body-parser");
const express = require("express");

const pkg = require("./package");
global.__DOC_ROOT = __dirname;
global.__VERSION = pkg.version;
require("./src/lib/require");

const logger = require("lib/logger").get("oj-entry");

const PORT = config.get("server.port");
const oj = global.oj = module.exports = express();

oj.use(bodyParser.json({ limit: "1000kb" }));
oj.use(bodyParser.urlencoded({ extended: true, limit: "1000kb" }));

oj.use((req, resp, next) => {
    resp.set(
        "X-Powered-By",
        `Ningbo University of Technology Online Judge v${__VERSION} - NBUT`);
    next();
});

// inject for the render data
require("helper/render_data_inject");

// using Jade
oj.set("view engine", "jade");

if(config.get("server.env") === "prod") {
    oj.set("views", `${__DOC_ROOT}/f2e/build/templates/`);
    oj.use(express.static(`${__DOC_ROOT}/f2e/build/assets/`));
} else {
    oj.set("views", `${__DOC_ROOT}/f2e/src/templates/`);
    oj.use(express.static(`${__DOC_ROOT}/f2e/dev/assets/`));
}

// use morgan logger
oj.use(require("lib/morgan"));

// load something...
require("lib/util");
require("lib/loader/model")("");
require("lib/loader/controller")("");

oj.use((req, resp) => {
    resp.status(404);

    if(req.accepts("html")) {
        return resp.render("404", {
            version: pkg.version
        });
    }

    if(req.accepts("json")) {
        return resp.send({ status: 404, message: "Not found" });
    }

    resp.type("txt").send("Not found");
});

oj.listen(PORT);
logger.info("Ningbo University of Technology Online Judge listened on port " + PORT + ".");
