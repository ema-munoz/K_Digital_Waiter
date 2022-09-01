const usuarios = (sequelize, type) => {
    return sequelize.define('usuarios', {
        idUsuarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagenUsuario: type.STRING,
        NombresUsuarios: type.STRING,
        ApellidosUsuarios: type.STRING,
        CedulaUsuario: type.STRING,
        usernameUsuarios: type.STRING(99),
        passwordUsuarios: type.STRING,
        emailUsuarios: type.STRING,
        edadUsuarios: type.STRING,
        celularUsuarios: type.STRING,
        creacionUsuarios: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuarios: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = usuarios