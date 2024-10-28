const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar las variables de entorno del archivo .env

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  // Opcional: agregar configuración de pool
  pool: {
    max: 5,
    min: 0,
    acquire: 60000, // Tiempo máximo para adquirir una conexión
    idle: 10000,    // Tiempo máximo para dejar una conexión inactiva
  },
  // Si necesitas SSL, descomenta lo siguiente
  dialectOptions: {
     ssl: {
       require: true,
      rejectUnauthorized: false,
     },
   },
});

module.exports = sequelize;
