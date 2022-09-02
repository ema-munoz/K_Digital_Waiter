const indexCtrl = {};
const pool = require("../database/database.sql");
const orm = require("../database/database.orm");

indexCtrl.show = (req, res) => {
	res.render("index");
};

indexCtrl.send = async (req, res) => {
	const { validate } = req.body;
	const validation = await orm.clients.findOne({
		where: { usernameClients: validate },
	});
	if (validation) {
		const validations = validation;
		if (validations.usernameClients !== null) {
			res.redirect("/Login/" + validations.idClients);
		} else {
			res.flash(
				"success",
				"You do not have a user with that account please register."
			);
			res.redirect("/Register");
		}
	} else {
		res.redirect("/Register");
	}
};

module.exports = indexCtrl;
