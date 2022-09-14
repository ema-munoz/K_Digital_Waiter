const bill = (sequelize, type) => {
    return sequelize.define(
        "bills",
        {
            idBills: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            countAmount: type.STRING,
            accountDates: type.STRING,
            quantityEndDate: type.STRING,
            accountStatus: type. STRING,
            creationBills: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateBills: {
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

module.exports = bill;