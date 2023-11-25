const mainControllers = {
    home: (req, res) => res.send('Ruta para la vista del HOME'),
    contact: (req, res) => res.send('Ruta para la vista del CONTACTO'),
    about: (req, res) => res.send('Ruta para la vista del NOSOTROS'),
    faqs: (req, res) => res.send('Ruta para la vista del PREGUNTAS'),
}

module.exports = mainControllers;