const express = require('express');
const clienteRoutes = require('./routes/clientesRoutes');

const app = express();

app.use(express.json());
app.use('/clientes', clienteRoutes);

module.exports = app;