const express = require('express');
const cfdiController = require('../controllers/cfdiController');
const authJwt = require('../middleware/authJwt');
const router = express.Router();

router.post('/valida',authJwt.verifyToken,cfdiController.xmlValidation);

module.exports = router;