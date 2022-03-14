const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController.js');

// router.get('/:id',usuarioController.getUsuario);
router.post('/signUp', usuarioController.registrarUsuario);

module.exports = router;