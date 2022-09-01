const register = {};

const passport = require('passport');

const sql = require('../configuracionBaseDatos/baseDatos.sql')
const orm = require('../configuracionBaseDatos/baseDatos.orm')

register.mostrarRegister = async (req, res) => {
    const usuario = await sql.query('select max(idUsuarios) from usuarios')
    res.render('Usuario/Register',{usuario});
};

register.Register = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/Register',
    failureFlash: true
});

register.mostrarLogin = async (req, res, next) => {
    const ids = req.params.id
    const Usuario = await sql.query('select idUsuarios, username from usuarios where idUsuarios = ?', [ids])
    res.render('Usuario/Login', { Usuario });
};

register.Login = passport.authenticate('local.signin', {
        successRedirect: '/tienda/agregar/',
        failureRedirect: '/',
        failureFlash: true
})

register.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = register;