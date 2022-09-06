const ubicationUser = (sequelize, type)=>{
    return sequelize.define('ubicationUsers', {
        idUbicationUser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        mainstreetLocationUser: type.STRING,
        streetSecondaryLocationUser: type.STRING,
        referenceLocationUser: type.STRING,
        HouseNumberLocationUser: type.STRING,
        creationUbicationUsers: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateUbicationUsers: {
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

module.exports = ubicationUser;
