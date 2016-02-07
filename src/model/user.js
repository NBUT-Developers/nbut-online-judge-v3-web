/**
 * XadillaX created at 2016-02-16 17:31:54 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const toshihiko = require("lib/toshihiko");

var User = toshihiko.define("oj_user", [
    { name: "userId", column: "userid", type: toshihiko.TYPE.Integer, primaryKey: true },
    { name: "username", type: toshihiko.TYPE.String },
    { name: "password", type: toshihiko.TYPE.String },
    { name: "roleType", column: "roleid", type: toshihiko.TYPE.Integer },
    { name: "nickname", type: toshihiko.TYPE.String },
    { name: "school", type: toshihiko.TYPE.String },
    { name: "email", type: toshihiko.TYPE.String },
    { name: "motto", type: toshihiko.TYPE.String },
    { name: "lastLanguage", column: "language", type: toshihiko.TYPE.Integer },

    { name: "solvedTimes", column: "solved", type: toshihiko.TYPE.Integer },
    { name: "submittedTimes", column: "submit", type: toshihiko.TYPE.Integer },
    { name: "solvedCount", column: "solvednum", type: toshihiko.TYPE.Integer },
    { name: "submittedCount", column: "submitnum", type: toshihiko.TYPE.Integer },
    { name: "solvedList", column: "solvedlist", type: toshihiko.TYPE.String },
    { name: "submittedList", column: "submitlist", type: toshihiko.TYPE.String },

    // 并没什么卵用了
    // { name: "_", column: "avatarbar", type: toshihiko.TYPE.Integer },

    { name: "createdAt", column: "regtime", type: toshihiko.TYPE.Integer },
]);

module.exports = User;
