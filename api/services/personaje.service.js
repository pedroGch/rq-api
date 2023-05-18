const boom = require('@hapi/boom')
class PersonajeService {

  constructor(){
    this.personajes =[
      {"id":1,
        "nombre":"cormac", 
        "fue": 18,
        "con": 15,
        "des": 12,
        "per": 16,
        "asp": 10,
        "tam": 13,
        "int": 15,
      },
      {"id":2,"nombre":"akaza", "fue": 12},
      {"id":3,"nombre":"anianka", "fue": 12},
      {"id":4,"nombre":"zecul", "fue": 12}
    ]
  }

  async create(data){
    const newPersonaje = {
      ...data
    }
    this.personajes.push(newPersonaje);
    return newPersonaje
  }

  async find(){
    return this.personajes;
  }

  async findOne(id){ 
    const p = this.personajes.find(item => item.id == id);
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

}

module.exports = PersonajeService;