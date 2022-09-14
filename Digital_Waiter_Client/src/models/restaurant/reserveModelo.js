const reserve = (sequelize, type)=>{
    return sequelize.define('reserves', {
        idReserve: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameReserve: type.STRING,
        descriptionReserve: type.STRING,
        typeReserve: type.STRING,
        creationReserve: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateReserve: {
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

module.exports = reserve;