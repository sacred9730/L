"use strict";


const users = {
    id: ["a", "b", "c"],
    pw: ["aa", "bb", "cc"],
};

const output = {
hello: (req, res) => {
    res.render("home/index");
},
login: (req, res) => {
    res.render("home/login")
},
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pw = req.body.pw;
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw){
                return res.json({
                    success: true,
                    msg: "로그인성공",
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인실패",

        })
    },
}

module.exports = {
    output,
    process,
};

