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
const restaurantUserModel = require("../models/restaurant/user/restaurantUserModel");
const rolRestaurantModel = require("../models/restaurant/user/rolRestaurantModel");
const subRolRestaurantModel = require("../models/restaurant/user/subRolRestaurantModels");
const userSubRolRestaurantModel = require("../models/restaurant/user/userSubroleRestaurantModel");
const billModel = require("../models/restaurant/billModels");
const detailInputIngredientsListsModel = require("../models/restaurant/detailInputIngredientsListModel");
const detailOutputIngredientsListModel = require("../models/restaurant/detailOutputIngredientsListModel");
const categoryModel = require("../models/restaurant/categoryModels");
const detailRecipeModel = require("../models/restaurant/detailRecipeModel");
const detailReserveModel = require("../models/restaurant/detailReserveModels");
const drinksModel = require("../models/restaurant/drinksModels");
const ingredientListInputModel = require("../models/restaurant/ingredientListInputModels");
const ingredientsModel = require("../models/restaurant/ingredientsModels");
const menuModel = require("../models/restaurant/menuModels");
const orderDetailModel = require("../models/restaurant/orderDetailModels");
const outputIngredientListModel = require("../models/restaurant/outputIngredientsListModel");
const orderSupplierModel = require("../models/restaurant/orderSupplierModels");
const portionsModel = require("../models/restaurant/portionsModel");
const promotionsModel = require("../models/restaurant/promotionsModels");
const providerModel = require("../models/restaurant/providerModel");
const recipesModel = require("../models/restaurant/recipesModel");
const reservationDetailsModel = require("../models/restaurant/reservationDetailModels");
const reserveModel = require("../models/restaurant/reserveModelo");
const restaurantModel = require("../models/restaurant/restaurantModel");
const saucerModel = require("../models/restaurant/saucerModels");
const workingHoursModel = require("../models/restaurant/workingHoursModels");
const ubicationRestaurantModel = require("../models/restaurant/ubicationRestaurant");
const tableRestaurantModel = require("../models/restaurant/restaurantTableModel");
const tableTypeRestaurantModel = require("../models/restaurant/tableTypeModels");
const typeMenuModel = require("../models/restaurant/typeMenuModel");
//restaurant

//client
const clientModel = require("../models/client/clientModel");
const customerLocationModel = require("../models/client/customerLocationModel");
const customerOrderDetailModel = require("../models/client/customerOrderDetailModel");
const customerOderModel = require("../models/client/customerOrderModel");
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
const ubicationUser = ubicationUserModel(sequelize, Sequelize);
//user

//restaurant
const restaurantPermissionUser = restaurantPermissionUserModel(
	sequelize,
	Sequelize
);
const bill = billModel(sequelize, Sequelize);
const category = categoryModel(sequelize, Sequelize);
const detailInputIngredientsList = detailInputIngredientsListsModel(
	sequelize,
	Sequelize
);
const restaurantUser = restaurantUserModel(sequelize, Sequelize);
const rolRestaurant = rolRestaurantModel(sequelize, Sequelize);
const subRolRestaurant = subRolRestaurantModel(sequelize, Sequelize);
const userSubRolRestaurant = userSubRolRestaurantModel(sequelize, Sequelize);
const detailOutputIngredientsList = detailOutputIngredientsListModel(
	sequelize,
	Sequelize
);
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
const recipes = recipesModel(sequelize, Sequelize);
const reservationDetails = reservationDetailsModel(sequelize, Sequelize);
const reserve = reserveModel(sequelize, Sequelize);
const restaurant = restaurantModel(sequelize, Sequelize);
const saucer = saucerModel(sequelize, Sequelize);
const workingHours = workingHoursModel(sequelize, Sequelize);
const ubicationRestaurant = ubicationRestaurantModel(sequelize, Sequelize);
const tableRestaurant = tableRestaurantModel(sequelize, Sequelize);
const tableTypeRestaurant = tableTypeRestaurantModel(sequelize, Sequelize);
const typeMenu = typeMenuModel(sequelize, Sequelize);
//restaurant

//client
const client = clientModel(sequelize, Sequelize);
const customerLocation = customerLocationModel(sequelize, Sequelize);
const customerOrderDetail = customerOrderDetailModel(sequelize, Sequelize);
const customerOder = customerOderModel(sequelize, Sequelize);
//client

//Relations
//user
user.hasMany(userRoleUser);
userRoleUser.belongsTo(user);

user.hasMany(ubicationUser);
ubicationUser.belongsTo(user);

roleUser.hasMany(userRoleUser);
userRoleUser.belongsTo(roleUser);

permissionUser.hasMany(userRoleUser);
userRoleUser.belongsTo(permissionUser);

userRoleUser.hasMany(ubicationUser);
ubicationUser.belongsTo(userRoleUser);

userRoleUser.hasMany(category);
category.belongsTo(userRoleUser);
//user

//restaurant
restaurantPermissionUser.hasMany(userSubRolRestaurant);
userSubRolRestaurant.belongsTo(restaurantPermissionUser);

client.hasMany(bill);
bill.belongsTo(client);

category.hasMany(drinks);
drinks.belongsTo(category);

category.hasMany(saucer);
saucer.belongsTo(category);

ingredientListInput.hasMany(detailInputIngredientsList);
detailInputIngredientsList.belongsTo(ingredientListInput);

restaurantUser.hasMany(userSubRolRestaurant);
userSubRolRestaurant.belongsTo(restaurantUser);

rolRestaurant.hasMany(userSubRolRestaurant);
userSubRolRestaurant.belongsTo(rolRestaurant);

subRolRestaurant.hasMany(userSubRolRestaurant);
userSubRolRestaurant.belongsTo(subRolRestaurant);

userSubRolRestaurant.hasMany(restaurant);
restaurant.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(ubicationRestaurant);
ubicationRestaurant.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(reserve);
reserve.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(detailReserve);
detailReserve.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(tableTypeRestaurant);
tableTypeRestaurant.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(tableRestaurant);
tableRestaurant.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(bill);
bill.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(promotions);
promotions.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(detailRecipe);
detailRecipe.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(recipes);
recipes.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(saucer);
saucer.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(portions);
portions.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(menu);
menu.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(typeMenu);
typeMenu.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(drinks);
drinks.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(category);
category.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(ingredients);
ingredients.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(orderDetail);
orderDetail.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(orderSupplier);
orderSupplier.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(provider);
provider.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(orderDetail);
orderDetail.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(ingredientListInput);
ingredientListInput.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(detailInputIngredientsList);
detailInputIngredientsList.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(detailOutputIngredientsList);
detailOutputIngredientsList.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(outputIngredientList);
outputIngredientList.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(outputIngredientList);
outputIngredientList.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(orderSupplier);
orderSupplier.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(reservationDetails);
reservationDetails.belongsTo(userSubRolRestaurant);

userSubRolRestaurant.hasMany(workingHours);
workingHours.belongsTo(userSubRolRestaurant);

outputIngredientList.hasMany(detailOutputIngredientsList);
detailOutputIngredientsList.belongsTo(outputIngredientList);

recipes.hasMany(detailRecipe);
detailRecipe.belongsTo(recipes);

reserve.hasMany(detailReserve);
detailReserve.belongsTo(reserve);

drinks.hasMany(menu);
menu.belongsTo(drinks);

drinks.hasMany(saucer);
saucer.belongsTo(drinks);

ingredients.hasMany(detailInputIngredientsList);
detailInputIngredientsList.belongsTo(ingredients);

ingredients.hasMany(detailOutputIngredientsList);
detailOutputIngredientsList.belongsTo(ingredients);

ingredients.hasMany(orderDetail);
orderDetail.belongsTo(ingredients);

ingredients.hasMany(recipes);
recipes.belongsTo(ingredients);

orderSupplier.hasMany(orderDetail);
orderDetail.belongsTo(orderSupplier);

portions.hasMany(menu);
menu.belongsTo(portions);

portions.hasMany(saucer);
saucer.belongsTo(portions);

provider.hasMany(orderDetail);
orderDetail.belongsTo(provider);

recipes.hasMany(detailRecipe);
detailRecipe.belongsTo(recipes);

recipes.hasMany(saucer);
saucer.belongsTo(recipes);

reserve.hasMany(reservationDetails);
reservationDetails.belongsTo(reserve);

restaurant.hasMany(recipes);
recipes.belongsTo(restaurant);

restaurant.hasMany(promotions);
promotions.belongsTo(restaurant);

restaurant.hasMany(ubicationRestaurant);
ubicationRestaurant.belongsTo(restaurant);

restaurant.hasMany(reserve);
reserve.belongsTo(restaurant);

restaurant.hasMany(workingHours);
workingHours.belongsTo(restaurant);

restaurant.hasMany(ingredientListInput);
ingredientListInput.belongsTo(restaurant);

restaurant.hasMany(outputIngredientList);
outputIngredientList.belongsTo(restaurant);

restaurant.hasMany(bill);
bill.belongsTo(restaurant);

restaurant.hasMany(customerOder);
customerOder.belongsTo(restaurant);

saucer.hasMany(menu);
menu.belongsTo(saucer);

tableRestaurant.hasMany(reservationDetails);
reservationDetails.belongsTo(tableRestaurant);

tableTypeRestaurant.hasMany(tableRestaurant);
tableRestaurant.belongsTo(tableTypeRestaurant);

typeMenu.hasMany(menu);
menu.belongsTo(typeMenu);
//restaurant

//client
client.hasMany(reserve);
reserve.belongsTo(client);

client.hasMany(customerOder);
customerOder.belongsTo(client);

client.hasMany(customerOrderDetail);
customerOrderDetail.belongsTo(client);

client.hasMany(customerLocation);
menu.belongsTo(client);

client.hasMany(bill);
bill.belongsTo(client);
//client
//Relations

module.exports = {
	//user
	user,
	userRoleUser,
	roleUser,
	permissionUser,
	ubicationUser,
	//user

	//restaurant
	restaurantPermissionUser,
	bill,
	category,
	detailInputIngredientsList,
	restaurantUser,
	rolRestaurant,
	subRolRestaurant,
	userSubRolRestaurant,
	detailOutputIngredientsList,
	detailRecipe,
	detailReserve,
	drinks,
	ingredientListInput,
	ingredients,
	menu,
	orderDetail,
	outputIngredientList,
	orderSupplier,
	portions,
	promotions,
	provider,
	recipes,
	reservationDetails,
	reserve,
	restaurant,
	saucer,
	workingHours,
	ubicationRestaurant,
	tableRestaurant,
	tableTypeRestaurant,
	typeMenu,
	//restaurant

	//client
	client,
	customerLocation,
	customerOrderDetail,
	customerOder,
	//client
};
