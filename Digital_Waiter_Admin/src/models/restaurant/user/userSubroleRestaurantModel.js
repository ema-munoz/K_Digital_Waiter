const userSubroleRestaurants = (sequelize, type) => {
	return sequelize.define(
		"userSubroleRestaurants",
		{
			idUserSubroleRestaurant: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			creationUserSubroleRestaurant: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateUserSubroleRestaurant: {
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

module.exports = userSubroleRestaurants;
