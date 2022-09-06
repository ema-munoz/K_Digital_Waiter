const restaurantTables = (sequelize, type) => {
	return sequelize.define(
		"restaurantTables",
		{
			idRestaurantTable: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameRestaurantTable: type.STRING,
			creationRestaurantTable: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRestaurantTable: {
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

module.exports = restaurantTables;
