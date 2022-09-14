const ubicacionRestaurant = (sequelize, type) => {
    return sequelize.define('ubicacionRestaurants', {
        idubicacionRestaurant: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mainstreetLocationubicacionRestaurant: type.STRING,
        streetSecondaryLocationubicacionRestaurant: type.STRING,
        referenceLocationubicacionRestaurant: type.STRING,
        HouseNumberLocationubicacionRestaurant: type.STRING,
        creationubicacionRestaurants: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateubicacionRestaurants: {
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

module.exports = ubicacionRestaurant;
