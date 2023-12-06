const boom = require('@hapi/boom')
const { json } = require('sequelize')
const model = require('../database/models/index')
const PersonajeService = require('./../services/personaje.service')

const create = async (data) =>{
  const personaje = new PersonajeService(data.fue, data.con, data.des, data.per, data.asp, data.tam, data.int)

  const newLocalizaciones  = await model.Localizacion.create(personaje.retornarPuntosDeGolpe())
  const newHabSigilo       = await model.HabSigilo.create()
  const newHabAgilidad     = await model.HabAgilidad.create()
  const newHabMagicas      = await model.HabMagicas.create()
  const newHabComunicacion = await model.HabComunicacion.create()
  const newHabConocimiento = await model.HabConocimiento.create()
  const newHabManipulacion = await model.HabManipulacion.create()
  const newHabPercepcion   = await model.HabPercepcion.create()
  
  data.LocalizacionId    = newLocalizaciones.id
  data.HabSigiloId       = newHabSigilo.id
  data.HabAgilidadId     = newHabAgilidad.id
  data.HabMagicaId       = newHabMagicas.id
  data.HabComunicacionId = newHabComunicacion.id
  data.HabConocimientoId = newHabConocimiento.id
  data.HabManipulacionId = newHabManipulacion.id
  data.HabPercepcionId   = newHabPercepcion.id

  const p = await model.Personaje.create(data)
  return p
}


const getPersonajeId = async (req,res) =>{ 
  const id = req.params.id
  const p = await PersonajeService.getPersonajeId(id)
  .then( personaje => {    
    return personaje
  })
  if (!p){
    throw boom.notFound('No pudimos hallar a tu personaje');
  }
  if (p.estaVivo){
    throw boom.conflic('tu personaje ya no existe');
  }
  const personaje = new PersonajeService.PersonajeService(p.fue, p.con, p.des, p.per, p.asp, p.tam, p.int)

  p.dataValues.mod_defensa       = personaje.getModDanio() 
  p.dataValues.mod_ataque        = personaje.modAtaque()
  p.dataValues.mmr_cc            = personaje.mrCc() 
  p.dataValues.mmr_tam           = personaje.mrTam() 
  p.dataValues.mmr_des           = personaje.mrDes() 
  p.dataValues.mod_danio         = personaje.getModDanio() 
  p.dataValues.pto_fatiga        = personaje.pFatiga() 
  p.dataValues.pto_golpe         = personaje.pGolpe() 
  p.dataValues.pto_magicos       = personaje.pMagicos()

  res.status(200).json(personaje)
}

const update = async (id, data) =>{
  await model.Personaje.update(data, {where: {id : id}})
}

const  getPersonajes = async (req, res) =>{
  PersonajeService.getAllCharacters()
  .then(respuesta => {
    if (respuesta.length > 0){
      res.status(200).json(respuesta)
    }else{
      throw boom.notFound('Por el momento no hay personajes cargados')
    }
  })
  
}

const getAllStats = async (id) =>{
  const p = await model.Personaje.findByPk(id);
  const pService = new PersonajeService(p.nombre, p.cultura ,p.fue, p.con, p.des, p.per, p.asp, p.tam, p.int)
  return pService.getAllStats();
}

const createdCharacter = async (req, res) => {
  const body = req.body;
  let personaje = await create(body);
  personaje ? res.status(201).json(personaje) : res.status(500).json("los dioses no aceptan a tu personaje")
}

module.exports = {
  create,
  getPersonajeId,
  getPersonajes,
  update,
  getAllStats,
  createdCharacter
}