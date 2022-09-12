
const detailInputIngredientsLists = (sequelize, type) => {
	return sequelize.define(
		"detailInputIngredientsLists",
		{
			idDetailInputIngredientsList: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            stateDetailInputIngredientsList: type.STRING,
			creationDetailInputIngredientsList: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateDetailInputIngredientsList: {
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

module.exports = detailInputIngredientsLists;
