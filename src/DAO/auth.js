const { runQuery } = require('../lib/database');

const chk_dup = async(userName, displayName) => {
    const sql = "SELECT ID FROM users WHERE userName=? OR displayName=?;";
    const [list] = await runQuery(sql, [userName, displayName]);

    return list;
}

const sign_up = async(userName, password, displayName, introduce, gender) => {
    const sql = "INSERT INTO users(userName, password, displayName, introduce, gender) VALUES (?, ?, ?, ?, ?);";
    await runQuery(sql, [userName, password, displayName, introduce, gender]);
}

const sign_in = async(userName) => {
    const sql = "SELECT ID, userName, password, displayName, introduce, gender, dateJoined, isActive FROM users WHERE userName=? AND isActive=1;";
    const [res] = await runQuery(sql, [userName]);
    return res;
}

module.exports = {
    chk_dup,
    sign_up,
    sign_in,
}