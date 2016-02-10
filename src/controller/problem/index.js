/**
 * XadillaX created at 2016-02-16 10:37:43 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

module.exports = (oj) => {
    oj.get("/", (req, resp) => {
        resp.redirect("/problem/list/1");
    });
};
