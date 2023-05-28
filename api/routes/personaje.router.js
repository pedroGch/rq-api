const express = require('express');
const router = express.Router();
const PersonajeService = require('./../services/personaje.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createPersonaje} = require('./../schemas/personaje.schema')

const pService = new PersonajeService();

/**
 * trae todos los personajes
 */
router.get('/', async (req, res) => {
  const personaje = await pService.getPersonajes()
  res.json(personaje)
})

/**
 * trae a un personaje por su id
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const personaje = await pService.getPersonajeId(id);
    res.json(personaje);
  } catch (error) {
    next(error)
  }


})

router.post('/', 
validatorHandler(createPersonaje, 'body'),
async (req, res) =>{
  const body = req.body;
  const newPersonaje = await pService.create(body);
  res.status(201).json(newPersonaje)
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