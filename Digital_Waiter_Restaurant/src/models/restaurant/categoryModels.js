const category = (sequelize, type) => {
	return sequelize.define(
		"categorys",
		{
			idCategory: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameCategory: type.STRING,
			costDrinks: type.STRING,
			creationCategory: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateCategory: {
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
module.exports = category;
