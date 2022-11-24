"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅의 모든 경로에서 views가 먹힌다.
app.set("views","./src/views");                 // 페이지를 뷰해줄 엔진세팅. 앱 세팅
app.set("view engine","ejs");               // html 코드를 어떤 엔진으로 해석할지 결정.

const home = require("./src/routes/home/index");      
// "/"루트로 들어오면 home으로 보낸다.
// 결국 ./routes/home 폴더에 있는 JS파일을 읽어와줘.
app.use("/", home);  // use는 미들웨어를 등록하는 메서드.


// // listen 명령어로 서버를 올린다. // 서버 실행을 www.js 파일로 옮김.
// app.listen(PORT, function(){
//     console.log("서버가동");
// })

module.exports = app;       //www.js 파일에서 실행하기 위해 내보내줌.

// 동일한 스크립트
// app.listen(3000, function(){
// app.listen(3000, () => {
//     console.log("서버가동");
// })

// node app.js 는 
// node는 V8엔진으로 app.js파일을 해석한다.
// npm install express -s 로 node_modules를 설치한다. package.json도 생성.

// npm install ejs -s

// npm init -y  // package.json 자동생성.
// npm install (npm i) 만해도 package.json 파일의 dependencies의 프로그램을 재설치해줌.
// package.json에서 start를 설정해주면 node ./bin/www.js -> npm start 로 서버를 실행할수있음.

