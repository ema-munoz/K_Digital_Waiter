const rolRestaurants = (sequelize, type)=>{
    return sequelize.define('rolRestaurants', {
        idRolRestaurant: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameRolRestaurants: type.STRING,
        stateRolRestaurants: type.STRING,
        creationRolRestaurants: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateRolRestaurants: {
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

module.exports = rolRestaurants;
