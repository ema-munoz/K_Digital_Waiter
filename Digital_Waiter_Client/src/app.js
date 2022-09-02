const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
const mysqlstore = require("express-mysql-session")(session);
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const { database } = require("./keys");
const app = express();
require("./lib/passport");
const handlebars = exphbs.create({
	defaultLayout: "main",
	layoutsDir: path.join(__dirname, "vistas", "layouts"),
	partialsDir: path.join(__dirname, "vistas", "partials"),
	extname: ".hbs",
	helpres: require("./lib/handlebars"),
});

/// archivos compartidos
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "vistas"));
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
/// archivos compartidos

//midlewars
app.use(fileUpload());
app.use(morgan("dev"));
app.use(
	bodyparser.urlencoded({
		extended: false,
	})
);
app.use(bodyparser.json());
app.use(
	session({
		secret: "Digital_Waiter",
		resave: false,
		saveUninitialized: false,
		store: new mysqlstore(database),
	})
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales
app.use((req, res, next) => {
	app.locals.message = req.flash("message");
	app.locals.success = req.flash("success");
	app.locals.user = req.user;
	next();
});
//varible globales

//public
app.use(express.static(path.join(__dirname, "public")));
//public

//routers
app.use(require("./routes/index.routes"));
app.use(require("./routes/register.routes"));
app.use(require("./routes/user.routes"));
//routers

module.exports = app;
