const express = require('express');
const router = express.Router();
const { Ordenador, DispositivoEntrada, DispositivoSalida, Impresora, PantallaTactil } = require('../src/component.js');

// Crear datos estáticos
const teclado = new DispositivoEntrada('Logitech', 'K120', 25, 'USB', [1, 2, 3]);
const raton = new DispositivoEntrada('Razer', 'DeathAdder', 50, 'USB', [1, 2, 3]);
const pantalla = new DispositivoSalida('Dell', 'P2421', 200, [1, 2, 3]);
const impresora = new Impresora('HP', 'LaserJet', 300, [1, 2], 'Tóner', 5000);
const pantallaTactil = new PantallaTactil('Samsung', 'SmartTouch', 400, [1, 2]);

const ordenador = new Ordenador('Custom', 'GamerPC');
ordenador.agregarComponente(teclado);
ordenador.agregarComponente(raton);
ordenador.agregarComponente(pantalla);
ordenador.agregarComponente(impresora);

// Ruta para mostrar detalles
router.get('/detalles', (req, res) => {
    const detalles = ordenador.mostrarDetalles();
    res.send(`<pre>${detalles}</pre>`);  // Corrected: Wrapped the response in backticks for string interpolation
});

// Ruta para mostrar precio total
router.get('/precio', (req, res) => {
    res.send(`Precio total del ordenador: $${ordenador.obtenerPrecio()}`);  // Corrected: String interpolation for price
});

module.exports = router;
