const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Ruta para la vista del SHOP'));
router.get('/item/:id', (req, res) => res.send(`Ruta para la vista de BUSCAR POR ID: ${req.params.id}` ));
router.post('/item/:id/add', (req, res) => res.send('Ruta para la vista de AGREGAR AL CARRITO'));
router.get('/cart', (req, res) => res.send('Ruta para la vista del CARRITO'));
router.post('/cart', (req, res) => res.send('Ruta para la vista de la PAGINA DE PAGO'));

module.exports = router;