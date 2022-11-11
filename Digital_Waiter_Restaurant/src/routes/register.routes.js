const express = require("express");
const routes = express.Router();

const {
	showLogin,
	showRegister,
	Register,
	Login,
	closeSession,
} = require("../controllers/register.controllers");

routes.get("/Register", showRegister);
routes.post("/Register", Register);

routes.get("/Login/:id", showLogin);
routes.post("/Login/:id", Login);

routes.get("/CloseSession", closeSession);

module.exports = routes;
