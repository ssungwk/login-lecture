"use strict";

const users = {
    id: ["ssungwk","ssungwk2","ssungwk3"],
    pwd: ["1851","1851","1851"],
};

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
        
        if (users.id.includes(id)){
            const idx = users.id.IndexOf(id);
            if (users.pwd[idx] === pwd) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "Login False!",
        });
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