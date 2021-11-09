const { runQuery } = require('../lib/database');

const getList = async () => {
	const sql = `SELECT * FROM users WHERE isActive=1 ORDER BY ID`;
	const list = await runQuery(sql);

	return list;
};

const getUser = async (displayName) => {
	const sql = `SELECT introduce, gender, date_format(dateJoined, '%Y-%m-%d') AS dateJoined FROM users WHERE isActive=1 AND displayName=?`;
	const [user] = await runQuery(sql, [displayName]);

	return user;
}

module.exports = {
	getList,
	getUser,
};