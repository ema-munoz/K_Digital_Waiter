const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../lib/auth");
const { show } = require("../controllers/user.controllers");

router.get("/add/", isLoggedIn, show);

module.exports = router;
