const customerOrderDetails = (sequelize, type) => {
	return sequelize.define(
		"customerOrderDetails",
		{
			idCustomerOrderDetail: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			creationCustomerOrderDetail: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateCustomerOrderDetail: {
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

module.exports = customerOrderDetails;
