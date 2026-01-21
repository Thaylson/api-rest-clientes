const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clientesController');
const validadeCliente = require('../middlewares/validateCliente');

router.get('/', clienteController.listarClientes);
router.get('/:id', clienteController.obterClientePorId);
router.post('/', validadeCliente, clienteController.criarCliente);
router.put('/:id', validadeCliente, clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;