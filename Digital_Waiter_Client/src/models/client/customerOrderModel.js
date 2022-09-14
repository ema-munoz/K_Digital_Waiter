const customerOrders = (sequelize, type) => {
	return sequelize.define(
		"customerOrders",
		{
			idCustomerOrder: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			timeCustomerOrder: type.STRING,
			dateCustomerOrder: type.STRING,
			stateCustomerOrder: type.STRING,
			creationCustomerOrder: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateCustomerOrder: {
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

module.exports = customerOrders;
