const userCtrl = {};

userCtrl.show = (req, res, next) => {
	res.render("restaurant/list");
};
module.exports = userCtrl;
