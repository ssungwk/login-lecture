"use strict"

// # 은닉화.
class UserStorage{
    static #users = {
        id: ["ssungwk","ssungwk2","ssungwk3"],
        pwd: ["1851","1851","1851"],
        name: ["1851","1851","1851"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);

        const userskeys = Object.keys(users);
        const userInfo = userskeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
}

module.exports = UserStorage;