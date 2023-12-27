const seviceJugador = require('../services/jugador.service')

function crearJugador (req, res) {
  seviceJugador.altaJugador(req.body)
  .then(jugador => {
    if (jugador){
      res.status(200).send('Bienvenido a Glorantha')
    }
  })
}

module.exports = {
  crearJugador
}