const authControllers = {
    login: (req, res) => res.send('Ruta para la vista del LOGIN'),
    register: (req, res) => res.send('Ruta para la vista del REGISTER'),
    logout: (req, res) => res.send('Ruta para la vista del LOGOUT'),
}

module.exports = authControllers;