const express = require("express");
const routes = express.Router();

const { show, send } = require("../controllers/index.controllers");

routes.get("/", show);
routes.post("/", send);

module.exports = routes;
