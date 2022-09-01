const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "fintech";

mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
}).then(connection => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
    console.info("Base de datos creada o comprobada correctamente");
  })
})

const UsuarioModelos = require('../modelos/usuario/usuario')
const detalleRolUsuarioModelo = require('../modelos/usuario/detalleRolUsuario')
const rolUsuarioModelo = require('../modelos/usuario/rolUsuario')
const subRolUsuarioModelo = require('../modelos/usuario/subRolUsuario')

//coneccion
const sequelize = new Sequelize(
  'fintech',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

//usuario
const usuarios = UsuarioModelos(sequelize, Sequelize)
const detalleRolUsuario = detalleRolUsuarioModelo(sequelize, Sequelize)
const rolUsuario = rolUsuarioModelo(sequelize, Sequelize)
const subRolUsuario = subRolUsuarioModelo(sequelize, Sequelize)

//Relaciones 
//usuaruio
usuarios.hasMany(detalleRolUsuario)
detalleRolUsuario.belongsTo(usuarios)

rolUsuario.hasMany(detalleRolUsuario)
detalleRolUsuario.belongsTo(rolUsuario)

subRolUsuario.hasMany(detalleRolUsuario)
detalleRolUsuario.belongsTo(subRolUsuario)

module.exports = {
  usuarios,
  detalleRolUsuario,
  rolUsuario,
  subRolUsuario
}