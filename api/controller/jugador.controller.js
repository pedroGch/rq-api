const {altaPersonaje } = require('../services/jugador.service')

function crearJugador (req, res) {
  altaPersonaje(req.body)
}

module.exports = {
  crearJugador
}