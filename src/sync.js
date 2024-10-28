const sequelize = require('./config/database');
const User = require('./models/User');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('La base de datos se ha sincronizado.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

syncDatabase();