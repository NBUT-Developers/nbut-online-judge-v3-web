/**
 * XadillaX created at 2016-02-16 17:33:51 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const config = require("config");
const Toshihiko = require("toshihiko");

let toshihiko = new Toshihiko.Toshihiko(
        config.mysql.database,
        config.mysql.username,
        config.mysql.password,
        config.mysql);

toshihiko.TYPE = Toshihiko.Type;

module.exports = toshihiko;
