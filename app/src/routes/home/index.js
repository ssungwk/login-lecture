"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");    //

router.get("/", ctrl.hello)
router.get("/login", ctrl.login)

module.exports = router;       //외부파일에서 사용할수있도록 내보내기 명령.