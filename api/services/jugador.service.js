const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const model = require('../database/models/index')
require('dotenv').config();

async function  altaJugador (data) {
  const hashedPassword = bcrypt.hashSync(data.password, parseInt(process.env.HASNUMBER))
  data = {...data, password: hashedPassword}
  const jugador = await model.Jugador.create(data)
  return jugador
}

async function loginJugador(data) {
  const jugador = await obtenerJugador(data.nombre)
  if (!jugador){
    throw {mensaje : 'usuario o contraseña incorrecta'}
  }
  
  if (!bcrypt.compareSync(data.password, jugador.get().password)){
    throw {mensaje : 'usuario o contraseña incorrecta'}  
  }

  const token = jwt.sign(data, process.env.SECRETKEY, {expiresIn:60})
  
  data = {...data, password:undefined, token: token}
  
  return data
}

async function obtenerJugador(nombre) {
  const jugador = await model.Jugador.findOne({where: {nombre: nombre}})
  return jugador
}
module.exports = {
  altaJugador,
  loginJugador
}