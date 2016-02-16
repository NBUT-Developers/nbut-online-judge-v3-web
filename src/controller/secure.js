/**
 * XadillaX created at 2016-02-16 10:55:30 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const auth = require("middleware/auth");

module.exports = (oj) => {
    oj.use(auth());

    oj.get("/signin", (req, resp) => {
        if(req.loggedIn) {
            return resp.redirect("/");
        }

        resp.render("secure/signin");
    });

    oj.get("/easter_egg", auth(true), (req, resp) => {
        return resp.send("Hello Easter egg!");
    });
};
