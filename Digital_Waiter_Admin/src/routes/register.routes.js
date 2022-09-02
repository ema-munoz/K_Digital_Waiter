const express = require("express");
const routes = express.Router();

const {
	showLogin,
	showRegister,
	register,
	login,
	closeSession,
} = require("../controllers/register.controllers");

routes.get("/Register", showRegister);
routes.post("/Register", register);

routes.get("/Login/:id", showLogin);
routes.post("/Login/:id", login);

routes.get("/CloseSession", closeSession);

module.exports = routes;
