const { runQuery } = require('../lib/database');

const sign_up = async(userName, password, displayName, introduce, gender) => {
    const sql = "INSERT INTO users(userName, password, displayName, introduce, gender) VALUES (?, ?, ?, ?, ?)";
    runQuery(sql, [userName, password, displayName, introduce, gender]);
}

module.exports = {
    sign_up,
}