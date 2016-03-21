/**
 * XadillaX created at 2015-12-01 17:40:19 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

let particles = require("const/particles");

module.exports = (oj) => {
    oj.get("/", (req, resp) => {
        resp.renderData.pageType = "home";
        resp.render("index", {
            cssName: "homepage"
        });
    });

    oj.get("/particles", (req, resp) => {
        resp.send(particles);
    });
};
