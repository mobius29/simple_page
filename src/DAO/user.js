const { runQuery } = require('../lib/database');

const getList = async () => {
	const sql = `SELECT * FROM users WHERE isActive=1 ORDER BY ID`;
	const list = await runQuery(sql);

	return list;
};

module.exports = {
	getList,
};