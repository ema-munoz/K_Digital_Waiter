const userRoleUser = (sequelize, type) => {
	return sequelize.define(
		"userRoleUsers",
		{
			idUserRoleUser: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nameUserRoleUser: type.STRING,
			stateUserRoleUser: type.STRING,
			creationUserRoleUser: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			aupdateUserRoleUser: {
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

module.exports = userRoleUser;
