const providers = (sequelize, type) => {
	return sequelize.define(
		"providers",
		{
			idProviders: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameProviders: type.STRING,
			cellphoneProviders: type.STRING,
			creationProviders: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateProviders: {
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

module.exports = providers;
