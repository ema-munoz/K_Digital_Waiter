const restaurantPermits =(sequelize, type) => {
    return sequelize.defiene(
        "restaurantPermits",
        {
            idRestaurantPermits: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            permissionsRestaurantPermits: type.STRING,
			StatusPermitsRestaurant:type.STRING,
            
            creationRestaurantPermits: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRestaurantPermits: {
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
module.exports = restaurantPermits;


    

