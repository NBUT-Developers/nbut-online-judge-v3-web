/**
 * XadillaX created at 2016-02-16 14:15:10 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const util = require("util");
const querystring = require("querystring");

const async = require("async");

const User = util.getModel("user");

module.exports = (redirect) => {
    return (req, resp, next) => {
        let loggedIn = false;
        async.waterfall([
            callback => {
                if(!req.session) return callback();
                if(!req.session.userId) return callback();
                loggedIn = true;
                return callback();
            },

            callback => {
                if(!loggedIn) return callback();

                loggedIn = false;
                User.findById(req.session.userId, function(err, user) {
                    if(err) return callback(err);
                    if(!user) {
                        delete req.session.userId;
                        return callback();
                    }

                    req.user = user;
                    loggedIn = true;
                    return callback();
                }, true);
            }
        ], (err) => {
            if(err) {
                return resp.send(err);
            }

            if(!loggedIn) {
                if(!redirect) {
                    req.user = {};
                    req.loggedIn = false;
                    return next();
                } else {
                    const myAddr = req.originalUrl;
                    const qs = querystring.stringify({
                        back: myAddr
                    });
                    return resp.redirect(`/secure/signin?${qs}`);
                }
            }

            req.loggedIn = true;
            return next();
        });
    };
};
