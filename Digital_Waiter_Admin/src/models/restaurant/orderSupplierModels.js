const orderSupplier = (sequelize, type) => {
    return sequelize.define(
        "orderSuppliers",
        {
            idOrderSuppliers: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nameOrderSuppliers: type.STRING,
            descriptionOrderSuppliers: type.STRING,
            creationOrderSuppliers: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateOrderSuppliers: {
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

module.exports = orderSupplier;

 