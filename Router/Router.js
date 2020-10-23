//Importar express + su router y el controlador
const express = require('express')
const router = express.Router()
const Controlador = require('../Controllers/Controller')


//Crear las rutas
router.get('/', Controlador.home)
router.get('/turnos', Controlador.listarTurnos)
router.post('/turnos', Controlador.guardarTurno)
router.get('/turnos/:id', Controlador.listarTurno)
router.put('/turnos/:id', Controlador.editarTurno)
router.delete('/turnos/:id', Controlador.eliminarTurno)

module.exports = router;