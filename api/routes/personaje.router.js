const express = require('express');
const router = express.Router();
const validatorHandler = require('./../middlewares/validator.handler')
const { getPersonajeId,  getPersonajes,  update,  getAllStats, createdCharacter} = require('./../controller/personaje.controller')

/**
 * trae todos los personajes
 */
router.get('/', getPersonajes)

/**
 * trae a un personaje por su id
 */
router.get('/:id', getPersonajeId)

/**
 * Crea un personaje
 */
router.post('/', createdCharacter)

/**
 * trea la info de un arma especifica de un personaje
 */
router.get('/:personajeId/arma/:armaId', (req, res) => {
  console.log('te traigo un arma para que la veas');
})

module.exports = router;