const { UserDAO } = require('../../DAO');

const getList = async (req, res, next) => {
	try {
		const list = await UserDAO.getList();
		res.render('./users/index.pug', { list });
	} catch(e){
		next(e);
	}
};

const getUser = async (req, res, next) => {
	try {
		displayName = req.query.displayName;
		if(!displayName) throw new Error("BAD_REQUEST");
		
		const user = await UserDAO.getUser(displayName);
		res.render('./users/user.pug', { user });
	} catch(e){
		next(e);
	}
};

module.exports = {
	getList,
	getUser,
}