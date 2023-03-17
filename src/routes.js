const express = require('express');
const router = express.Router();

const PortariaController = require('./controllers/PortariaController');

router.get('/portaria', PortariaController.buscarTodos),
router.get('/portaria/:id', PortariaController.buscarUm),
router.post('/portaria', PortariaController.inserir),
router.put('/portaria/:id', PortariaController.alterar),
router.delete('/portaria/:id', PortariaController.excluir),

module.exports = router;