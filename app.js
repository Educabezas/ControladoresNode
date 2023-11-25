const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = 3001;