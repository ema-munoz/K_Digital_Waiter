const portions = (sequelize, type) =>{
    return sequelize.define('portions', {
        idPortions: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagesPortions: type.STRING,
        descriptionPortions: type.STRING,
        costPortions:type.STRING,
        creationPortions: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updatePortions: {
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

module.exports = portions;