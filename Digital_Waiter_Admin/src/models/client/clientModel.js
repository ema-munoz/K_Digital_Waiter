const clients = (sequelize, type) => {
	return sequelize.define(
		"clients",
		{
			idClients: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			imageClient: type.STRING,
			nameClients: type.STRING,
			lastnameClients: type.STRING,
			identificationCardClient: type.STRING,
			usernameClients: type.STRING(99),
			passwordClients: type.STRING,
			mailClients: type.STRING,
			ageClients: type.STRING,
			cellphoneClients: type.STRING,
			creationClients: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateClients: {
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

module.exports = clients;
