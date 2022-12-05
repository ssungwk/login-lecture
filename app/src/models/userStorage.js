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
}

module.exports = UserStorage;