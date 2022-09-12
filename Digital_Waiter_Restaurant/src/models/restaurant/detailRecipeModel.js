const detailRecipe = (sequelize, type) => {
    return sequelize.define('detailRecipe', {
        idDetailRecipe: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameRecipe: type.STRING,
        amountRecipe: type.STRING,
        descriptionRecipe: type.STRING,
        creationDetailRecipe: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateDetailRecipe: {
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

module.exports = detailRecipe;