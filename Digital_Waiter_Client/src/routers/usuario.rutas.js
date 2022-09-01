const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { mostrar } = require('../Controladores/usuario.controlador');

router.get('/agregar/', isLoggedIn, mostrar);

module.exports = router;