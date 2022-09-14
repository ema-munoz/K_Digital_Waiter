const reservationDetails = (sequelize, type) =>{
    return sequelize.define('reservationDetails', {
        idReservationDetails: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creationReservationDetails: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        updateReservationDetails: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP "),
            allowNull: false,
        },
    },
    {
        timestamps: false,
    });
};

module.exports = reservationDetails