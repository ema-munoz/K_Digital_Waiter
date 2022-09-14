const restaurantUsers = (sequelize, type) => {
	return sequelize.define(
		"restaurantUsers",
		{
			idRestaurantUsers: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			imageRestaurantUser: type.STRING,
			nameRestaurantUsers: type.STRING,
			lastnameRestaurantUsers: type.STRING,
			identificationCardRestaurantUser: type.STRING,
			usernameRestaurantUsers: type.STRING(99),
			passwordRestaurantUsers: type.STRING,
			mailRestaurantUsers: type.STRING,
			ageRestaurantUsers: type.STRING,
			cellphoneRestaurantUsers: type.STRING,
			creationRestaurantUsers: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRestaurantUsers: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP "),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};

module.exports = restaurantUsers;