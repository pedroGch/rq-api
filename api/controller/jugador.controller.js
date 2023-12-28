const seviceJugador = require('../services/jugador.service')

function crearJugador (req, res) {
  seviceJugador.altaJugador(req.body)
  .then(jugador => {
    if (jugador){
      res.status(200).send('Bienvenido a Glorantha')
    }
  })
}

function loginJugador(req, res) {
  seviceJugador.loginJugador(req.body)
    .then(jugador => {
      console.log(jugador);
      if (jugador){
        res.status(200).json(jugador)
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

module.exports = {
  crearJugador,
  loginJugador
}