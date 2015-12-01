/**
 * XadillaX created at 2015-12-01 17:40:19 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

module.exports = (oj) => {
    oj.get("/", function(req, resp) {
        resp.send("Hello world!");
    });
};
