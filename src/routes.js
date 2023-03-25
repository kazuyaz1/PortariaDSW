const express = require('express');
const router = express.Router();

const PortariaController = require('./controllers/PorteiroController');

router.get('/porteiro', PortariaController.buscarTodos),
router.get('/porteiro/:id', PortariaController.buscarUm),
router.post('/porteiro/add', PortariaController.inserir),
router.put('/porteiro/altera/:id', PortariaController.alterar),
router.delete('/porteiro/exclui/:id', PortariaController.excluir),

module.exports = router;