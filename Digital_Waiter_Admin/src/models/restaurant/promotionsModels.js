const promotions = (sequelize, type)=>{
    return sequelize.define('promotions', {
        idPromotions: {
            type: type.INTEGER,
            primaryKey: true,
            autoINCREMENT: true
        },
        namePromotions: type.STRING,
        reasonPromotions: type.STRING,
        discountPromotions: type.STRING,
        typePromotions: type.STRING,
        starteDatePromotions: type.STRING,
        finishDatePromotions: type.STRING,
        statePromotions: type.STRING,
        creationPromotions: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updatePromotions: {
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

module.exports = promotions;