const clienteService = require('../services/clientesService');

exports.listarClientes = async (req, res) => {
    const clientes = clienteService.listarClientes();
    res.json(clientes);
};

exports.obterClientePorId = async (req, res) => {
    const cliente = clienteService.obterClientePorId(Number(req.params.id));

    if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.json(cliente);
};


exports.criarCliente =  (req, res) => {
    const novoCliente = clienteService.criarCliente(req.body);
    res.status(201).json(novoCliente);
};

exports.atualizarCliente =  (req, res) => {
    const clienteAtualizado = clienteService.atualizarCliente(Number(req.params.id), req.body);

    if (!clienteAtualizado) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(clienteAtualizado);
};


exports.deletarCliente =  (req, res) => {
    const sucesso = clienteService.deletarCliente(Number(req.params.id));
    if (!sucesso) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(204).send();
}
