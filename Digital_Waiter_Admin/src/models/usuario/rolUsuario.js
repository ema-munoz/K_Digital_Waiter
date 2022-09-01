const rolUsuario = (sequelize, type) =>{
    return sequelize.define('rolUsuarios',{
        idRolUsuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreRolUsuario: type.STRING,
        estadoRolUsuario: type.STRING,
        creacionRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRolUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = rolUsuario