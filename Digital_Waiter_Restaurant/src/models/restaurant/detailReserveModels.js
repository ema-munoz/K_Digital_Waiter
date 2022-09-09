 const detailReserve = (sequelize, type) =>{
    return sequelize.define('detailReserve', {
        idReserve: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        creationDetailReserve: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateDetailReserve: {
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

module.exports = detailReserve;