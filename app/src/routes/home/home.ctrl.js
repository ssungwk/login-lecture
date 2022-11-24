"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// object 로 사용가능하게 빼줌.
module.exports = {
    hello,
    login,
};