const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");
const dbName = process.env.DB_SCHEMAS || "Digital_Waiter";

mysql
	.createConnection({
		host: process.env.DB_HOST || "127.0.0.1",
		port: process.env.DB_PORT || "3306",
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "",
	})
	.then((connection) => {
		connection
			.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
			.then((res) => {
				console.info(
					"The Database has been successfully created or checked."
				);
			});
	});

// user
const userModel = require("../models/user/userModel");
const userRoleUserModel = require("../models/user/userRoleUserModel");
const roleUserModel = require("../models/user/roleUserModel");
const permissionUserModel = require("../models/user/permissionUserModel");
const ubicationUserModel = require("../models/user/ubicationUserModel");
// user
//restaurnat
const restaurantPermissionUserModel = require("../models/restaurant/user/restaurantPermitsUserModels");
const restaurantUserModel = require('../models/restaurant/user/restaurantUserModel');
const rolRestaurantModel = require('../models/restaurant/user/rolRestaurantModel');
const subRolRestaurantModel = require('../models/restaurant/user/subRolRestaurantModels');
const userSubRolRestaurantModel = require('../models/restaurant/user/userSubroleRestaurantModel');
const billModel = require('../models/restaurant/billModels');
const detailInputIngredientsListsModel = require('../models/restaurant/detailInputIngredientsListModel');
const detailOutputIngredientsListModel = require('../models/restaurant/detailOutputIngredientsListModel');
const categoryModel = require('../models/restaurant/categoryModels');
const detailRecipeModel = require('../models/restaurant/detailRecipeModel');
const detailReserveModel = require('../models/restaurant/detailReserveModels');
const drinksModel = require('../models/restaurant/drinksModels');
const ingredientListInputModel = require('../models/restaurant/ingredientListInputModels');
const ingredientsModel = require('../models/restaurant/ingredientsModels');
const menuModel = require('../models/restaurant/menuModels');
const orderDetailModel = require('../models/restaurant/orderDetailModels');
const outputIngredientListModel = require('../models/restaurant/outputIngredientsListModel');
const orderSupplierModel = require('../models/restaurant/orderSupplierModels');
const portionsModel = require('../models/restaurant/portionsModel');
const promotionsModel = require('../models/restaurant/promotionsModels');
const providerModel = require('../models/restaurant/providerModel');
const recipesModel = require('../models/restaurant/recipesModel');
const reservationDetailsModel = require('../models/restaurant/reservationDetailModels');
const reserveModel = require('../models/restaurant/reserveModelo');
const restaurantModel = require('../models/restaurant/restaurantModel');
const saucerModel = require('../models/restaurant/saucerModels');
const workingHoursModel = require('../models/restaurant/workingHoursModels')
//restaurant
//client
const clientModel = require('../models/client/clientModel');
const customerLocationModel = require('../models/client/customerLocationModel');
const customerOrderDetailModel = require('../models/client/customerOrderDetailModel');
const customerOderModel = require('../models/client/customerOrderModel');
//client

// connection
const sequelize = new Sequelize("Digital_Waiter", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connected.");
	})
	.catch((err) => {
		console.log("It is not connected.");
	});

sequelize.sync({ force: false }).then(() => {
	console.log("Synchronized tables.");
});
// connection

//user
const user = userModel(sequelize, Sequelize);
const userRoleUser = userRoleUserModel(sequelize, Sequelize);
const roleUser = roleUserModel(sequelize, Sequelize);
const permissionUser = permissionUserModel(sequelize, Sequelize);
const ubicationUser= ubicationUserModel(sequelize, Sequelize);
//user

//restaurant
const restaurantPermissionUser= restaurantPermissionUserModel(sequelize, Sequelize);

const bill = billModel(sequelize, Sequelize);
const category = categoryModel(sequelize, Sequelize);
const datailInputIngredientsList = detailInputIngredientsListsModel(sequelize, Sequelize);
const restaurantUser = restaurantUserModel(sequelize, Sequelize);
const rolRestaurant = rolRestaurantModel(sequelize, Sequelize);
const subRolRestaurant = subRolRestaurantModel(sequelize, Sequelize);
const userSubRolRestaurant = userSubRolRestaurantModel(sequelize, Sequelize);
const detailOutputIngredientsList = detailOutputIngredientsListModel(sequelize, Sequelize);
const detailRecipe = detailRecipeModel(sequelize, Sequelize);
const detailReserve = detailReserveModel(sequelize, Sequelize);
const drinks = drinksModel(sequelize, Sequelize);
const ingredientListInput = ingredientListInputModel(sequelize, Sequelize);
const ingredients = ingredientsModel(sequelize, Sequelize);
const menu = menuModel(sequelize, Sequelize);
const orderDetail = orderDetailModel(sequelize, Sequelize);
const outputIngredientList = outputIngredientListModel(sequelize, Sequelize);
const orderSupplier = orderSupplierModel(sequelize, Sequelize);
const portions = portionsModel(sequelize, Sequelize);
const promotions = promotionsModel(sequelize, Sequelize);
const provider = providerModel(sequelize, Sequelize);
const recipes = recipesModel(sequelize,Sequelize);
const reservationDetails = reservationDetailsModel(sequelize, Sequelize);
const reserve = reserveModel(sequelize, Sequelize);
const restaurant = restaurantModel(sequelize, Sequelize);
const saucer = saucerModel(sequelize, Sequelize);
const workingHours = workingHoursModel(sequelize, Sequelize);
const client = clientModel(sequelize, Sequelize);
const customerLocation = customerLocationModel(sequelize, Sequelize);
const customerOrderDetail = customerOrderDetailModel(sequelize, Sequelize);
const customerOder = customerOderModel(sequelize, Sequelize);
//restaurant

//Relations
user.hasMany(userRoleUser);
userRoleUser.belongsTo(user);

roleUser.hasMany(userRoleUser);
userRoleUser.belongsTo(roleUser);

permissionUser.hasMany(userRoleUser);
userRoleUser.belongsTo(permissionUser);
//Relations

module.exports = {
	user,
	userRoleUser,
	roleUser,
	permissionUser,
};
