const users = (sequelize, type) => {
	return sequelize.define(
		"users",
		{
			idUsers: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			imageUser: type.STRING,
			nameUsers: type.STRING,
			lastnameUsers: type.STRING,
			identificationCardUser: type.STRING,
			usernameUsers: type.STRING(99),
			passwordUsers: type.STRING,
			mailUsers: type.STRING,
			ageUsers: type.STRING,
			cellphoneUsers: type.STRING,
			creationUsers: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateUsers: {
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

module.exports = users;
