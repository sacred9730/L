"use strict";




const output = {
hello: (req, res) => {
    res.render("home/index"); // home/index 템플릿을 렌더링
},
login: (req, res) => {
    res.render("home/login") // home/login 템플릿을 렌더링
},
};



const User = require("../../models/User");
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

