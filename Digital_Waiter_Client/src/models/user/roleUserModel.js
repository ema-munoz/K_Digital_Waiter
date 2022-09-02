const roleUser = (sequelize, type) => {
	return sequelize.define(
		"roleUsers",
		{
			idRoleUser: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameRoleUser: type.STRING,
			stateRoleUser: type.STRING,
			creationRoleUser: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRoleUser: {
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

module.exports = roleUser;
