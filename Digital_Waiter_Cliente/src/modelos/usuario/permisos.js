const detalleRolUsuario = (sequelize, type) =>{
    return sequelize.define('detalleRolUsuarios', {
        idDetalleRolUsuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creacionDetalleRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = detalleRolUsuario