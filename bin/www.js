"use strict";

const app = require("../app.js");
const PORT = 3000;

// listen 명령어로 서버를 올린다.
app.listen(PORT, () => {
    console.log("서버가동");
});