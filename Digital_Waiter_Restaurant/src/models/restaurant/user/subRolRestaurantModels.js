const subRollRestaurant = (sequelize, type) => {
	return sequelize.define(
		"subRollRestaurants",
		{
			idSubRollRestaurant: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameSubRollRestaurant: type.STRING,
			StatusSubRolRestaurant: type.STRING,
			creationSubRollRestaurant: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateSubRollRestaurants: {
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
module.exports = subRollRestaurant;
