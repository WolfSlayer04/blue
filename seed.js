const sequelize = require('./src/config/database');
const User = require('./src/models/usuarios');

const seedDatabase = async () => {
  await sequelize.sync();

  await User.bulkCreate([
    {
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      password: 'tu_contraseña',
    },
    {
      nombre: 'Ana Gómez',
      email: 'ana@example.com',
      password: 'tu_contraseña',
    },
  ]);

  console.log('Datos iniciales agregados.');
  process.exit();
};

seedDatabase();
