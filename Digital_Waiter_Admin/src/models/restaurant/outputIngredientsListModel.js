
const outputIngredientsLists = (sequelize, type) => {
	return sequelize.define(
		"outputIngredientsLists",
		{
			idOutputIngredientsList: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            nameOutputIngredientsList: type.STRING,
            dateOutputIngredientsList: type.STRING,
			creationOutputIngredientsList: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateOutputIngredientsList: {
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

module.exports = outputIngredientsLists;
