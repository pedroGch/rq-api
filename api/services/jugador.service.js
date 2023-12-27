const bcrypt = require('bcrypt')
const { func } = require('joi')
const model = require('../database/models/index')

async function  altaJugador (data) {
  const hashedPassword = bcrypt.hashSync(data.password, parseInt(8))
  data = {...data, password: hashedPassword}
  const jugador = await model.Jugador.create(data)
  return jugador
}

module.exports = {
  altaJugador
}