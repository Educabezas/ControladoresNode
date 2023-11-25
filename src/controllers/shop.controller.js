const shopControllers = {
    shop: (req, res) => res.send('Ruta para la vista del SHOP'),
    item: (req, res) => res.send('Ruta para la vista del ITEM'),
    cart: (req, res) => res.send('Ruta para la vista del CARRITO'),
}

module.exports = shopControllers;