const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');

const PORT = 3001;

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en ⚡http://localhost:${PORT}`));