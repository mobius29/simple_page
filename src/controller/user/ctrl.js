const { UserDAO } = require('../../DAO');

const getList = async (req, res, next) => {
	try {
		const list = await UserDAO.getList();
		res.render('./user/index.pug', { list });
	} catch(e){
		next(e);
	}
};

module.exports = {
	getList,
}