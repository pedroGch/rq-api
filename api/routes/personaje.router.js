const express = require('express');
const router = express.Router();
const PersonajeService = require('./../services/personaje.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createPersonaje} = require('./../schemas/personaje.schema')
const {create,  getPersonajeId,  getPersonajes,  update,  getAllStats} = require('./../controller/personaje.controller')



/**
 * trae todos los personajes
 */
router.get('/', async (req, res) => {
  //const personaje = await pService.getPersonajes()
  getPersonajes
  res.json(getPersonajes)
})

/**
 * trae a un personaje por su id
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const p = await getPersonajeId(id)
    res.json(p);
  } catch (error) {
    next(error)
  }


})

router.post('/', 
//validatorHandler(createPersonaje, 'body'),
async (req, res) =>{
  const body = req.body;
  let personaje = await create(body);
  personaje ? res.status(201).json(personaje) : res.status(500).json("los dioses no aceptan a tu personaje")
  
})

/**
 * trea la info de un arma especifica de un personaje
 */
  router.get('/:personajeId/arma/:armaId', (req, res) => {
  const { personajeId, armaId} = req.params;
  res.json({
    personajeId,
    armaId,
    "nombre": "cormac",
    "fue": 12,
    "per": 12,
    "cons": 12
  })
})

module.exports = router;