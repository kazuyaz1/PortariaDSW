const express = require('express');
const router = express.Router();

const PortariaController = require('./controllers/PortariaController');

router.get('/portaria', PortariaController.buscarTodos),
router.get('/portaria/:id', PortariaController.buscarUm),
router.post('/portaria', PortariaController.addPorteiro),


module.exports = router;