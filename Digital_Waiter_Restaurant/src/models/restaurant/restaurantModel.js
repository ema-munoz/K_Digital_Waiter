const restaurant = (sequelize, type) => {
    return sequelize.define('restaurants', {
        idRestaurants: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rucRestaurants: type.STRING,
        imageRestaurant: type.STRING,
        nameRestaurant: type.STRING,
        descriptionRestaurant: type.STRING,
        cellphone: type.STRING,
        phone: type.STRING,
        creationRestaurants: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateRestaurants: {
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

module.exports = restaurant;