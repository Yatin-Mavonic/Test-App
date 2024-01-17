const db = require('./database');

module.exports = class UserDetails {

    static getAllUsers() {
        return db.execute('SELECT * FROM user_details');
    }

    static getUserById(id) {
        return db.execute(`SELECT * FROM user_details WHERE id = ?`, [id]);
    }

    static createUser(name, address) {
        return db.execute(`INSERT INTO user_details (name, address) VALUES ('${name}', '${address}')`);
    }

    static deleteUser(id) {
        return db.execute('DELETE FROM user_details WHERE id = ?', [id]);
    }
}




