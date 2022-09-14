const typeMenus = (sequelize, type) => {
	return sequelize.define(
		"typeMenus",
		{
			idTypeMenu: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameTypeMenu: type.STRING,
			stateTypeMenu: type.STRING,
			creationTypeMenu: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateTypeMenu: {
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

module.exports = typeMenus;
