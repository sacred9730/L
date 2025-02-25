"use strict";

class UserStorage {
   static #users = { //정적변수로 선언 해야 접근가능 #으로 옴닉화
        id: ["a", "b", "c"],
        pw: ["aa", "bb", "cc"],
        name: ["aaa", "bbb", "ccc"],
    };

    static getUsers(...fields) { // 옴닉화한 정적 메소드를 프론트에서 가져오게함//
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
     
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
        console.log(users);
        return { succes: true };
    };
}

module.exports = UserStorage;