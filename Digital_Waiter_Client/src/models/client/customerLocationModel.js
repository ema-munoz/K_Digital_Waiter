const customerLocations = (sequelize, type) => {
	return sequelize.define(
		"customerLocations",
		{
			idCustomerLocations: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			mainStreetCustomerLocation: type.STRING,
			secundaryStreetCustomerLocation: type.STRING,
			referenceCustomerLocation: type.STRING,
			houseNumberCustomerLocation: type.INTEGER,
			creationCustomerLocation: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateCustomerLocation: {
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

module.exports = customerLocations;
