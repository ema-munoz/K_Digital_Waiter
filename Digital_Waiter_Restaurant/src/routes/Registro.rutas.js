const express = require('express');
const rutas = express.Router();

const { mostrarLogin, mostrarRegistro, Registro, Login, cierreSesion } = require('../Controladores/registro.controlador')


rutas.get('/Registro', mostrarRegistro);
rutas.post('/Registro', Registro);


rutas.get('/Login/:id', mostrarLogin);
rutas.post('/Login/:id', Login);

rutas.get('/CerrarSecion', cierreSesion);

module.exports = rutas;