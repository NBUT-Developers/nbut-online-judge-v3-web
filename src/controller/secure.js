/**
 * XadillaX created at 2016-02-16 10:55:30 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const util = require("util");

const auth = require("middleware/auth");

const User = util.getModel("user");

module.exports = (oj) => {
    oj.use(auth());

    oj.get("/signin", (req, resp) => {
        if(req.loggedIn) {
            return resp.redirect("/");
        }

        resp.render("secure/signin");
    });

    oj.post("/signin", (req, resp) => {
        const username = req.body.username;
        const password = req.body.password;

        User.checkLogin(username, password, function(err, user) {
            if(err) {
                return resp.send({
                    status: 500,
                    message: err.message
                });
            }

            req.session.userId = user.userId;
            return resp.send({
                status: 200
            });
        });
    });

    oj.get("/easter_egg", auth(true), (req, resp) => {
        return resp.send("Hello Easter egg!");
    });
};
