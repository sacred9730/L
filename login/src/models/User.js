"use strict";

//

const UserStorage = require("./UserStorage");



class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const { id, pw } = UserStorage.getUserInfo(this.body.id);
        console.log(id, pw)
        if(id){
            if(id === this.body.id && pw === this.body.pw){
                return {success: true};
            }
            return {success: false, msg: "암호틀림"};
        }
        return {success: false, msg: "존재하지않음" };
    }
}

module.exports = User;