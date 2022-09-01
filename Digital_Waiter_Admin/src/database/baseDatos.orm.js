const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "Digital_Waiter";

mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
}).then(connection => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
    console.info("Base de datos ha sido creada o comprobada correctamente.");
  })
})

const UserModels = require('../models/user/user')
const detalleRolUserModelo = require('../models/user/detalleRolUser')
const rolUserModelo = require('../models/user/rolUser')
const subRolUserModelo = require('../models/user/subRolUser')

//coneccion
const sequelize = new Sequelize(
  'Digital_Waiter',
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

//user
const users = UserModels(sequelize, Sequelize)
const detalleRolUser = detalleRolUserModelo(sequelize, Sequelize)
const rolUser = rolUserModelo(sequelize, Sequelize)
const subRolUser = subRolUserModelo(sequelize, Sequelize)

//Relaciones 
//usuaruio
users.hasMany(detalleRolUser
)
detalleRolUser.belongsTo(users)

rolUser.hasMany(detalleRolUser
)
detalleRolUser.belongsTo(rolUser
)

subRolUser.hasMany(detalleRolUser
)
detalleRolUser.belongsTo(subRolUser
)

module.exports = {
  users,
  detalleRolUser
,
  rolUser
,
  subRolUser

}