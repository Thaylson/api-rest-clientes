function validateCliente(req, res, next) {
    const { nome, email, idade } = req.body;

    //verificação dos campos obrigatórios
    if (!nome || !email || !idade) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios: nome, email, idade.' });
    }

    //tipo de dados
    if (typeof nome !== 'string' ){
        return res.status(400).json({ error: 'O campo nome deve ser uma string.' });
    }

    if (typeof email !== 'string' ){
        return res.status(400).json({ error: 'O campo email deve ser uma string.' });
    }

    if (typeof idade !== 'number' ){
        return res.status(400).json({ error: 'O campo idade deve ser um número.' });
    }

    if (idade <= 18 ){
        return res.status(400).json({ error: 'O cliente deve ser maior de 18 anos.' });
    }

    next(); // prosseguir para o próximo middleware ou rota
}

module.exports = validateCliente;