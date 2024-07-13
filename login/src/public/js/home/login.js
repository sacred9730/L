"use strict";

let ejs_ID = document.querySelector("#input_ID");
let ejs_PW = document.querySelector("#input_PW");
let ejs_login = document.querySelector("#button_login");
ejs_login.addEventListener("click", send_login);
function send_login(){
    let req = {
        id: ejs_ID.value,
        pw: ejs_PW.value,
    };

fetch("/login",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
});

};