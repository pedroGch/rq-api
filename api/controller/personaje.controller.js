const boom = require('@hapi/boom')
const model = require('../database/models/index')
const PersonajeService = require('./../services/personaje.service')

const create = async (data) =>{
  
  const newHabSigilo       = await model.HabSigilo.create()
  const newHabAgilidad     = await model.HabAgilidad.create()
  const newHabMagicas      = await model.HabMagicas.create()
  const newHabComunicacion = await model.HabComunicacion.create()
  const newHabConocimiento = await model.HabConocimiento.create()
  const newHabManipulacion = await model.HabManipulacion.create()
  const newHabPercepcion   = await model.HabPercepcion.create()
  
  data.HabSigiloId       = newHabSigilo.id
  data.HabAgilidadId     = newHabAgilidad.id
  data.newHabMagicasId   = newHabMagicas.id
  data.HabComunicacionId = newHabComunicacion.id
  data.HabConocimientoId = newHabConocimiento.id
  data.HabManipulacionId = newHabManipulacion.id
  data.HabPercepcionId   = newHabPercepcion.id

  const newPersonaje = await model.Personaje.create(data)
  return newPersonaje
}

const getPersonajeId = async (id) =>{ 
  const p = await model.Personaje.findByPk(id);
  if (!p){
    throw boom.notFound('No pudimos hallar a tu personaje');
  }
  if (p.estaVivo){
    throw boom.conflic('tu personaje ya no existe');
  }
  return p
}

const update = async (id, data) =>{
  await model.Personaje.update(data, {where: {id : id}})
}

const  getPersonajes = async () =>{
  const personajes = await model.Personaje.findAll();
  if (!personajes){
    throw boom.notFound('Por el momento no hay personajes cargados');
  }
  // agregar filtro para filtrar entre los vivos y los muertos 
  return personajes;
}

const getAllStats = async (id) =>{
  const p = await model.Personaje.findByPk(id);
  const pService = new PersonajeService(p.nombre, p.cultura ,p.fue, p.con, p.des, p.per, p.asp, p.tam, p.int)
  return pService.getAllStats();
}

module.exports = {
  create,
  getPersonajeId,
  getPersonajes,
  update,
  getAllStats
}