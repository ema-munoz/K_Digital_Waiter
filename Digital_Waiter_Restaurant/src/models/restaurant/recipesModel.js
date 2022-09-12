const recipes = (sequelize, type) => {
	return sequelize.define(
		"recipes",
		{
			idRecipes: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameRecipes: type.STRING,
            descriptionRecipes: type.STRING,
			imageRecipe: type.STRING,
			creationRecipes: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRecipes: {
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

module.exports = recipes;
