"use strict";

const UserStorage = require("../../models/UserStorage");


const output = {
hello: (req, res) => {
    res.render("home/index"); // home/index 템플릿을 렌더링
},
login: (req, res) => {
    res.render("home/login") // home/login 템플릿을 렌더링
},
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
       const users = UserStorage.getUsers("id", "pw", "name");
        const response = {};  // 응답 객체 생성
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id); // ID의 인덱스 찾기
            if(users.pw[idx] === pw){
                    response.success = true;
                    response.msg = "로그인성공";
                    return res.json(response); // JSON 형식으로 응답 반환
            }
        }        
            response.success = false;
            response.msg = "로그인실패";
            return res.json(response);

    },
};

module.exports = {
    output,
    process,
};

