const orderDetail = (sequelize, type) => {
    return sequelize.define(
        "orderDetails",
        {
            idorderDetail: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            detailOrderQuantity: type.STRING,
            creationOrderDetails: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateOrderDetails: {
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

module.exports = orderDetail;


    