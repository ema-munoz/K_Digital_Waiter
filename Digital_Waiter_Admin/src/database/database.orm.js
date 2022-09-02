const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");
const dbName = process.env.DB_SCHEMAS || "Digital_Waiter";

mysql
	.createConnection({
		host: process.env.DB_HOST || "127.0.0.1",
		port: process.env.DB_PORT || "3306",
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "",
	})
	.then((connection) => {
		connection
			.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
			.then((res) => {
				console.info(
					"The Database has been successfully created or checked."
				);
			});
	});

// user
const userModel = require("../models/user/userModel");
const userRoleUserModel = require("../models/user/userRoleUserModel");
const roleUserModel = require("../models/user/roleUserModel");
const permissionUserModel = require("../models/user/permissionUserModel");
// user

// connection
const sequelize = new Sequelize("Digital_Waiter", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connected.");
	})
	.catch((err) => {
		console.log("It is not connected.");
	});

sequelize.sync({ force: false }).then(() => {
	console.log("Synchronized tables.");
});
// connection

//user
const user = userModel(sequelize, Sequelize);
const userRoleUser = userRoleUserModel(sequelize, Sequelize);
const roleUser = roleUserModel(sequelize, Sequelize);
const permissionUser = permissionUserModel(sequelize, Sequelize);
//user

//Relations
user.hasMany(userRoleUser);
userRoleUser.belongsTo(user);

roleUser.hasMany(userRoleUser);
userRoleUser.belongsTo(roleUser);

permissionUser.hasMany(userRoleUser);
userRoleUser.belongsTo(permissionUser);
//Relations

module.exports = {
	user,
	userRoleUser,
	roleUser,
	permissionUser,
};
