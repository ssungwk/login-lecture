"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); 

// 루트경로로 요청이 들어오면 send로 브라우저에 보내준다.
// router.get("/", (req, res) => {
//    //res.send("여기는 / 입니다.");
//    res.render("home/index");
// })
router.get("/", ctrl.hello );     //hello라는 컨트롤러 함수를 사용. home.ctrl.js 파일에 있음.

// 경로의 /는 꼭 넣어주세요.
// router.get("/login", (req, res) => {
//     res.render("home/login");
// })
router.get("/login", ctrl.login);     //hello라는 컨트롤러 함수를 사용. home.ctrl.js 파일에 있음.

// index.js를 외부 파일에서 사용할수있게 해준다. 
// app.js 파일에 사용가능하게 내보내주는 기능. app.use()메서드로 받아감.
module.exports = router;

