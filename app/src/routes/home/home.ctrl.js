"use strict";

const UserStorage = require("../../models/userStorage");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {   
    login: (req, res) => {

        const id = req.body.id,
              pwd = req.body.pwd;
        
        // const userStorage = new UserStorage();
        // console.log(userStorage.users);
        const users = UserStorage.getUsers("id","pwd");     // 객체를 안 만들고 바로 불러오기위해 users에 static 붙임.

        const response = {};
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.pwd[idx] === pwd) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "Login False!";
        return res.json(response);
    },
}

module.exports = {
    output,
    process
    };

// const hello = (req, res) => {
//     res.render("home/index");
// };

// const login = (req, res) => {
//     res.render("home/login");
// };

// object 로 사용가능하게 빼줌.
// module.exports = {
//     hello,
//     login,
// };