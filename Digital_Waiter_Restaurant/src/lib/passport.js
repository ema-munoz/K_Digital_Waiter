const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require('path')
var CryptoJS = require("crypto-js");

const orm = require('../configuracionBaseDatos/baseDatos.orm')
const sql = require('../configuracionBaseDatos/baseDatos.sql')
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const rows = await orm.dueñoTienda.findOne({ where: { usernameDueñoTienda: username } });
      if (rows) {
        const user = rows;
        const contraseña = await CryptoJS.AES.decrypt(user.password, 'secret');
        const validPassword = contraseña.toString(CryptoJS.enc.Utf8);
        if (validPassword == password) {
          done(null, user, req.flash("message", "Bienvenido" + " " + user.username));
        } else {
          done(null, false, req.flash("message", "Datos incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const usuarios = await orm.dueñoTienda.findOne({ where: { usernameDueñoTienda: username } });
      if (usuarios === null) {
        const { idUsuarios } = req.body
        let nuevoUsuario = {
          idDueñoTienda: idUsuarios,
          usernameDueñoTienda: username,
          passwordDueñoTienda: password
        };
        nuevoUsuario.passwordDueñoTienda = await helpers.encryptPassword(password);
        const resultado = await orm.dueñoTienda.create(nuevoUsuario);
        nuevoUsuario.id = resultado.insertId;

        const imagenUsuario = req.files.imagenDueñoTienda
        const validacion = path.extname(imagenUsuario.name)

        const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

        if (!extencion.includes(validacion)) {
          req.flash("success", "Imagen no compatible.")
        }

        if (!req.files) {
          req.flash("success", "Imagen no insertada.")
        }

        const ubicacion = __dirname + "/../public/img/Tienda/usuario/" + imagenUsuario.name;

        imagenUsuario.mv(ubicacion, function (err) {
          if (err) {
            return res.status(500).send(err)
          }
          sql.query("UPDATE dueñoTiendas SET imagenDueñoTienda = ? WHERE idDueñoTienda = ?", [imagenUsuario.name, idUsuarios])
          console.log("Imagen de usuario ingresada")
        })
        return done(null, nuevoUsuario);
      } else {
        if (usuarios) {
          const usuario = usuarios
          if (username == usuario.username) {
            done(null, false, req.flash("message", "El nombre de usuario ya existe."))
          } else {
            const { idUsuarios } = req.body
            let nuevoUsuario = {
              idDueñoTienda: idUsuarios,
              usernameDueñoTienda: username,
              passwordDueñoTienda: password
            };
            nuevoUsuario.passwordDueñoTienda = await helpers.encryptPassword(password);
            const resultado = await orm.dueñoTienda.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;

            const imagenUsuario = req.files.imagenDueñoTienda
            const validacion = path.extname(imagenUsuario.name)

            const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

            if (!extencion.includes(validacion)) {
              req.flash("success", "Imagen no compatible.")
            }

            if (!req.files) {
              req.flash("success", "Imagen no insertada.")
            }

            const ubicacion = __dirname + "/../public/img/Tienda/usuario/" + imagenUsuario.name;

            imagenUsuario.mv(ubicacion, function (err) {
              if (err) {
                return res.status(500).send(err)
              }
              sql.query("UPDATE dueñoTiendas SET imagenDueñoTienda = ? WHERE idDueñoTienda = ?", [imagenUsuario.name, idUsuarios])
              console.log("Imagen de usuario ingresada")
            })
            return done(null, nuevoUsuario);
          }
        }
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});