const Saucer = (sequelize, type) => {
    return sequelize,define(
        "saucer",
        {
            idSaucer: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            imageSaucer: type.STRING,
            descriptionSaucer: type.STRING,
            featuredCymbal: type.STRING,
            saucerType: type.STRING,
            cymbalCost: type.STRING,
            creationsaucer: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updatesaucer: {
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

module.exports = Saucer;
