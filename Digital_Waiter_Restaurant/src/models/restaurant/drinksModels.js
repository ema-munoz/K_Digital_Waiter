const drinks =(sequelize, type) => {
    return sequelize.defiene(
        "drinks",
        {
            idDrinks: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            imageDrinks: type.STRING,
            descriptionDrinks: type.STRING,
            costDrinks: type.STRING,
            creationDrinks: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateDrinks: {
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
module.exports = drinks;


    


