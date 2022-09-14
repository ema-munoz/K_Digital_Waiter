
const detailOutputIngredientsLists = (sequelize, type) => {
	return sequelize.define(
		"detailOutputIngredientsLists",
		{
			idDetailOutputIngredientsList: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
            stateDetailOutputIngredientsList: type.STRING,
			creationDetailOutputIngredientsList: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateDetailOutputIngredientsList: {
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

module.exports = detailOutputIngredientsLists;
