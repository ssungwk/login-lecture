"use strict";

const express = require('express');
const router = express.Router();

// 루트경로로 요청이 들어오면 send로 브라우저에 보내준다.
// router.get("/", (req, res) => {
//    //res.send("여기는 / 입니다.");
//    res.render("home/index");
// })
const ctrl = require("./home.ctrl");    //

// 경로의 /는 꼭 넣어주세요.
// router.get("/login", (req, res) => {
//     res.render("home/login");
// })
router.get("/", ctrl.output.hello)
router.get("/login", ctrl.output.login)

router.post("/login", ctrl.process.login)

// index.js를 외부 파일에서 사용할수있게 해준다. 
// app.js 파일에 사용가능하게 내보내주는 기능. app.use()메서드로 받아감.
module.exports = router;       