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
			const rows = await orm.restaurantUsers.findOne({
				where: { usernameRestaurantUsers: username },
			});
			if (rows) {
				const user = rows;
				const passwords = await CryptoJS.AES.decrypt(
					user.passwordRestaurantUsers,
					"secret"
				);
				const validPassword = passwords.toString(CryptoJS.enc.Utf8);
				if (validPassword == password) {
					done(
						null,
						user,
						req.flash(
							"message",
							"Bienvenido" + " " + user.usernameRestaurantUsers
						)
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
			const users = await orm.restaurantUsers.findOne({
				where: { usernameRestaurantUsers: username },
			});
			if (users === null) {
				const { idUsuarios } = req.body;
				let nuevoUsuario = {
					idRestaurantUsers: idUsuarios,
					usernameRestaurantUsers: username,
					passwordRestaurantUsers: password,
				};
				nuevoUsuario.passwordRestaurantUsers =
					await helpers.encryptPassword(password);
				const resultado = await orm.restaurantUsers.create(
					nuevoUsuario
				);
				nuevoUsuario.id = resultado.insertId;

				const imagenUsuario = req.files.imageRestaurantUser;
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
					__dirname + "/../public/img/restaurant/" + imagenUsuario.name;

				imagenUsuario.mv(ubicacion, function (err) {
					if (err) {
						return res.status(500).send(err);
					}
					sql.query(
						"UPDATE restaurantUsers SET imageRestaurantUser = ? WHERE idRestaurantUsers = ?",
						[imagenUsuario.name, idUsuarios]
					);
					console.log("Imagen de user ingresada");
				});
				return done(null, nuevoUsuario);
			} else {
				if (users) {
					const user = users;
					if (username == user.usernameRestaurantUsers) {
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
							idRestaurantUsers: idUsuarios,
							usernameRestaurantUsers: username,
							passwordRestaurantUsers: password,
						};
						nuevoUsuario.passwordRestaurantUsers =
							await helpers.encryptPassword(password);
						const resultado = await orm.restaurantUsers.create(
							nuevoUsuario
						);
						nuevoUsuario.id = resultado.insertId;

						const imagenUsuario = req.files.imageRestaurantUser;
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
							"/../public/img/restaurant/" +
							imagenUsuario.name;

						imagenUsuario.mv(ubicacion, function (err) {
							if (err) {
								return res.status(500).send(err);
							}
							sql.query(
								"UPDATE restaurantUsers SET imageRestaurantUser = ? WHERE idRestaurantUsers = ?",
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
