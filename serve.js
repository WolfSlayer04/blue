const express = require('express');
const cors = require('cors');
const verificarToken = require('./src/midleware/autenticacion.js'); // Asegúrate de que la ruta sea correcta
const manejoErrores = require('./src/midleware/manejoErrores.js'); // Asegúrate de que la ruta sea correcta
const usuariosRouter = require('./src/routes/usuarios'); // Asegúrate de que la ruta sea correcta
const enfermerosRouter = require('./src/routes/enfermeros'); // Asegúrate de que la ruta sea correcta
const ofertasRouter = require('./src/routes/ofertas'); // Asegúrate de que la ruta sea correcta
const sequelize = require('./src/config/database');

require('dotenv').config(); // Cargar variables del archivo .env


// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger'); // El archivo swagger.js que configuramos antes

const app = express();

const CORS_ORIGIN = process.env.CORS_ORIGIN || '*'

app.use(cors({ origin: CORS_ORIGIN}));
app.use(express.json());

// Rutas de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/usuarios', usuariosRouter);
app.use('/enfermeros', verificarToken, enfermerosRouter);
app.use('/ofertas', verificarToken, ofertasRouter);

// Manejo de errores
app.use(manejoErrores);




sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida con la base de datos con éxito.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });


// Configuración del puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

sequelize.sync({ force: true }) // Esto recreará las tablas
  .then(() => {
    console.log('Tablas sincronizadas correctamente');
  })
  .catch(err => {
    console.error('Error al sincronizar las tablas:', err);
  });
