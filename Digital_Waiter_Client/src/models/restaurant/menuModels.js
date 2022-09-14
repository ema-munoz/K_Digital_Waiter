const menu = (sequelize, type) => {
    return sequelize.define('', {
        idMenu: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ImageMenu: type.STRING,
        dateMenu: type.STRING,
        creationMenu: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateMenu: {
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

module.exports = menu;