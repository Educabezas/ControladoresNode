const adminControllers = {
    admin: (req, res) => res.send('Ruta para la vista del ADMIN'),
    create: (req, res) => res.send('Ruta para la vista del CREATE'),
    edit: (req, res) => res.send('Ruta para la vista del EDIT'),
}

module.exports = adminControllers;