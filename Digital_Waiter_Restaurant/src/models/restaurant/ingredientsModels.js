const ingredients = (sequelize, type) => {
    return sequelize.define(
        "ingredients",
        {
            idIngredients: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nameIngredients: type.STRING,
            quantityIngredients: type.STRING,
            stateIngredients: type.STRING,
            creationIngredients: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateIngredients: {
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

module.exports = ingredients;


    
