const tableType = (sequelize, type) => {
	return sequelize.define(
		"tableType",
		{
			idTableType: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},

			nameTableType: type.STRING,
			descriptionTableType: type.STRING,
			creationTableType: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateTableType: {
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
module.exports = tableType;
