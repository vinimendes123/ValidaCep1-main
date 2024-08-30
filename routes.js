const express = require('express');
const enderecoController = require('./controllers/EnderecoController');

const router = express.Router();

router.post('/enderecos', enderecoController.createEndereco);
router.post('/enderecos/:cep', enderecoController.createEnderecoByCep); 
router.get('/enderecos', enderecoController.getAllEnderecos);
router.get('/enderecos/:id', enderecoController.getEnderecoById);
router.put('/enderecos/:id', enderecoController.updateEndereco);
router.delete('/enderecos/:id', enderecoController.deleteEndereco);

module.exports = router;

