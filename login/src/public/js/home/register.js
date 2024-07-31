"use strict";
//프론트에 연결된 퍼블릭 회원가입 js 

let ejs_ID = document.querySelector("#re_ID");
let ejs_name = document.querySelector("#re_name");
let ejs_PW = document.querySelector("#re_PW");
let ejs_PW1 = document.querySelector("#re_PW1");
let ejs_login = document.querySelector("#re_reg");

ejs_login.addEventListener("click", send_register);

function send_register(){
    if (!ejs_ID.value) return alert("아이디를 입력하시오");
    if (ejs_PW.value !== ejs_PW1) return alert("비번 안독같음");
    
    let req = {
        id: ejs_ID.value,
        name: ejs_name.value,
        pw: ejs_PW.value,
    };
    console.log(req);
    


fetch("/register",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
}) // 로그인 프론트로 보내는법


.then((res) => res.json())
.then((res) => {
    if (res.success){
        location.href = "/login"
    } else {
        alert (res.msg);
    };
})
.catch((err) => {
    console.error("회원가입중 에러 ");
});
};