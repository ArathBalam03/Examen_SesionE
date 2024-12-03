const express = require('express');
// Este archivo solo nos sirve para configurar el servidor e inicializar express
const app = express();
const ordenadorRouter = require('./routes/ordenador.js');

app.use('/ordenador', ordenadorRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en el puerto ${PORT}`));

// http://localhost:3000/ordenador/detalles
// http://localhost:3000/ordenador/precio
