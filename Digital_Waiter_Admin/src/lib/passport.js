const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
var CryptoJS = require("crypto-js");

const orm = require("../database/database.orm");
const sql = require("../database/database.sql");
const helpers = require("./helpers");

passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const rows = await orm.user.findOne({
				where: { usernameUsers: username },
			});
			if (rows) {
				const user = rows;
				const passwords = await CryptoJS.AES.decrypt(
					user.passwordUsers,
					"secret"
				);
				const validPassword = passwords.toString(CryptoJS.enc.Utf8);
				if (validPassword == password) {
					done(
						null,
						user,
						req.flash("message", "Bienvenido" + " " + user.username)
					);
				} else {
					done(
						null,
						false,
						req.flash("message", "Datos incorrectos")
					);
				}
			} else {
				return done(
					null,
					false,
					req.flash("message", "El nombre de user no existe.")
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
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const users = await orm.user.findOne({
				where: { usernameUsers: username },
			});
			if (users === null) {
				const { idUsuarios } = req.body;
				let nuevoUsuario = {
					idUsers: idUsuarios,
					usernameUsers: username,
					passwordUsers: password,
				};
				nuevoUsuario.passwordUsers = await helpers.encryptPassword(
					password
				);
				const resultado = await orm.user.create(nuevoUsuario);
				nuevoUsuario.id = resultado.insertId;

				const imagenUsuario = req.files.imageUser;
				const validacion = path.extname(imagenUsuario.name);

				const extencion = [
					".PNG",
					".JPG",
					".JPEG",
					".GIF",
					".TIF",
					".png",
					".jpg",
					".jpeg",
					".gif",
					".tif",
				];

				if (!extencion.includes(validacion)) {
					req.flash("success", "Imagen no compatible.");
				}

				if (!req.files) {
					req.flash("success", "Imagen no insertada.");
				}

				const ubicacion =
					__dirname + "/../public/img/user/" + imagenUsuario.name;

				imagenUsuario.mv(ubicacion, function (err) {
					if (err) {
						return res.status(500).send(err);
					}
					sql.query(
						"UPDATE users SET imageUser = ? WHERE idUsers = ?",
						[imagenUsuario.name, idUsuarios]
					);
					console.log("Imagen de user ingresada");
				});
				return done(null, nuevoUsuario);
			} else {
				if (users) {
					const user = users;
					if (username == user.usernameUsers) {
						done(
							null,
							false,
							req.flash(
								"message",
								"El nombre del usuario ya existe."
							)
						);
					} else {
						const { idUsuarios } = req.body;
						let nuevoUsuario = {
							idUsers: idUsuarios,
							usernameUsers: username,
							passwordUsers: password,
						};
						nuevoUsuario.passwordUsers =
							await helpers.encryptPassword(password);
						const resultado = await orm.user.create(nuevoUsuario);
						nuevoUsuario.id = resultado.insertId;

						const imagenUsuario = req.files.imageUser;
						const validacion = path.extname(imagenUsuario.name);

						const extencion = [
							".PNG",
							".JPG",
							".JPEG",
							".GIF",
							".TIF",
							".png",
							".jpg",
							".jpeg",
							".gif",
							".tif",
						];

						if (!extencion.includes(validacion)) {
							req.flash("success", "Imagen no compatible.");
						}

						if (!req.files) {
							req.flash("success", "Imagen no insertada.");
						}

						const ubicacion =
							__dirname +
							"/../public/img/user/" +
							imagenUsuario.name;

						imagenUsuario.mv(ubicacion, function (err) {
							if (err) {
								return res.status(500).send(err);
							}
							sql.query(
								"UPDATE users SET imageUser = ? WHERE idUsers = ?",
								[imagenUsuario.name, idUsuarios]
							);
							console.log("Imagen de user ingresada");
						});
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
