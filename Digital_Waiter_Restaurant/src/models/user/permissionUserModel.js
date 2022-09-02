const permissionUser = (sequelize, type) => {
	return sequelize.define(
		"permissionUsers",
		{
			idPermissionUser: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			creationPermissionUser: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updatePermissionUser: {
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

module.exports = permissionUser;
