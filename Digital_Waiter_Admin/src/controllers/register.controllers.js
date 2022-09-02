const register = {};

const passport = require("passport");

const sql = require("../database/database.sql");
const orm = require("../database/database.orm");

register.showRegister = async (req, res) => {
	const user = await sql.query("select max(idUsers) from users");
	res.render("User/Register", { user });
};

register.Register = passport.authenticate("local.signup", {
	successRedirect: "/CloseSession",
	failureRedirect: "/Register",
	failureFlash: true,
});

register.showLogin = async (req, res, next) => {
	const ids = req.params.id;
	const User = await sql.query(
		"select idUsers, usernameUsers from users where idUsers = ?",
		[ids]
	);
	res.render("User/Login", { User });
};

register.Login = passport.authenticate("local.signin", {
	successRedirect: "/restaurant/list/",
	failureRedirect: "/",
	failureFlash: true,
});

register.closeSession = (req, res, next) => {
	req.logOut();
	res.redirect("/");
};

module.exports = register;
