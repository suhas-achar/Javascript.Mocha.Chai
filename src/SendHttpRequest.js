const axios = require('axios');


class User {
    greet(name) {
        return `Hello, ${name}`;
    }

    greetMsg(name, note) {
        let msg = this.greet(name);
        return msg + ' ' + note;
    }

    async getUserById(id) {//Sincere@april.biz
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        return response.data.email;
    }
}

const user = new User();

module.exports = { user };