const mysql = require("mysql");
const { promisify } = require("util");

const { database } = require("../keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === "PROTOCOL_CONNECTION_LOST") {
			console.error("The connection to the database was closed.");
		}
		if (err.code === "ER_CON_COUNT_ERROR") {
			console.error("The database has many connections.");
		}
		if (err.code === "ECONNREFUSED") {
			console.error("The connection to the database was not made.");
		}
	}
	if (connection) {
		connection.release();
		console.log("The database is connected.");
		return;
	}
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
