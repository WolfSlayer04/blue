const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  // Definición de atributos
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // Se auto incrementará
    primaryKey: true,    // Clave primaria
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Asegura que el correo sea único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'cliente', // Valor por defecto
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true, // Agrega createdAt y updatedAt por defecto
});

module.exports = User;