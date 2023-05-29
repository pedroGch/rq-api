const boom = require('@hapi/boom')
const model = require('../database/models/index')
class PersonajeService {

  constructor(){
  }

  async create(data){
    const newPersonaje = await model.Personaje.create(data)
    return newPersonaje
  }

  async getPersonajeId(id){ 
    const p = await model.Personaje.findOne({where: {id : id}});
    if (!p){
      throw boom.notFound('No pudimos hallar a tu personaje');
    }
    if (p.estaVivo){
      throw boom.conflic('tu personaje ya no existe');
    }
    return p
  }

  update(){

  }

  async getPersonajes(){
    const personajes = await model.Personaje.findAll();
    if (!personajes){
      throw boom.notFound('Por el momento no hay personajes cargados');
    }
    // agregar filtro para filtrar entre los vivos y los muertos 
    return personajes;
  }

}

module.exports = PersonajeService;