const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop.controller');

router.get('/shop', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id/add', shopControllers.item);
router.get('/cart', shopControllers.cart);
router.post('/car', shopControllers.car);

module.exports = router;