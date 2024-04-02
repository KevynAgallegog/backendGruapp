const express = require('express');
const router = express.Router();
const obtenerNotificaciones = require('../controllers/notificaciones-controller');

// Ruta para obtener notificaciones
router.get('/', obtenerNotificaciones);

module.exports = router;
