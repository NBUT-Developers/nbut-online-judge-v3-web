/**
 * XadillaX created at 2015-12-01 14:57:36 With ♥
 *
 * Copyright (c) 2015 Souche.com, all rights
 * reserved.
 */
"use strict";

module.exports = {
    server: {
        port: 8080,
        env: "dev"
    },

    session: {
        secret: "!@#$%^&*()_+|~",
        key: "boom-shakalaka",

        // memcached...
        hosts: "127.0.0.1:11211",
        prefix: "ojs_"
    },

    mysql: {
        database: "onlinejudge",
        username: "root",
        password: "",

        host: "127.0.0.1",
        port: 3306,
        connectionLimit: 10,
        charset: "utf8mb4_bin"
    },

    render: {
        title: "宁波工程学院在线评测幻想乡",
        baseUrl: "http://127.0.0.1:8080/"
    }
};
