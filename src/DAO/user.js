const { runQuery } = require('../lib/database');

const getList = async () => {
	const sql = `SELECT * FROM users WHERE isActive=1`;
	const list = runQuery(sql);

	return list;
};

module.exports = {
	getList,
};