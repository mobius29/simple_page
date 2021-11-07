const { runQuery } = require('../lib/database');

const sign_up = async(userName, password, displayName, introduce, gender) => {
    const sql = "INSERT INTO users(userName, password, displayName, introduce, gender) VALUES (?, ?, ?, ?, ?);";
    await runQuery(sql, [userName, password, displayName, introduce, gender]);
}

const sign_in = async(userName) => {
    const sql = "SELECT password FROM users WHERE userName=? AND isActive=1;";
    const [res] = await runQuery(sql, [userName]);
    return res;
}

module.exports = {
    sign_up,
    sign_in,
}