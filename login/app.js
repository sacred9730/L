"use strict"

const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("루트화면입니다.");
});

app.get("/login", (req, res) => {
    res.send("로그인화면");
});



app.listen(3000, () => {
    console.log("서버 가동")
});
