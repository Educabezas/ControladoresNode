const express = require('express');
const app = express();
const path = require('path');

const mainRoutes = require('./src/routes/main.routes');
const shopRoutes = require('./src/routes/shop.routes');
const adminRoutes = require('./src/routes/admin.routes');
const authRoutes = require('./src/routes/auth.routes');

const PORT = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./src/views"))

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en ⚡http://localhost:${PORT}`));