const ingredientListInput = (sequelize, type) => {
    return sequelize.define(
        "ingredientListInputs",
        {
            idIngredientListInput: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nameIdingredientListInput: type.STRING,
            dateListIngredientsInput: type.STRING,
            creationIngredientListInputs: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateIngredientListInputs: {
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

module.exports = ingredientListInput;

 