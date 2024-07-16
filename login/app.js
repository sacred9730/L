"use strict";
// 모듈
const express = require("express");
const app = express();

// 앱세팅 npm ejs 다운
app.set("views", "./src/views");
app.set("view engine", "ejs");

// API 요청 할떄
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


// 현재폴더에서 퍼블릭에 접근연결해주는 정적 메소드
app.use(express.static(`${__dirname}/src/public`));


const home = require("./src/routes/home");
app.use("/", home); // use ㅡ> 미들웨어를 등록해주는 메소드


module.exports = app;
