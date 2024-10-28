const manejoErrores = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
      mensaje: 'Error en el servidor',
      error: err.message
    });
  };
  
  module.exports = manejoErrores;
  