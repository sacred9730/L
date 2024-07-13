"use strict";
// 모듈
const express = require("express");
const app = express();


// 앱세팅 npm ejs 다운
app.set("views", "./src/views");
app.set("view engine", "ejs");



const home = require("./src/routes/home");
app.use("/", home); // use ㅡ> 미들웨어를 등록해주는 메소드


module.exports = app;
