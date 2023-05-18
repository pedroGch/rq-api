const express = require('express');
const router = express.Router();


/**
 * 
 * trae todos los jugadores
 */
 router.get('/', (req, res) => {
  const { id } = req.params;
  const { estado } = req.query;
  res.json({
    id,
    estado,
    "nombre": "cormac",
    "fue": 12,
    "per": 12,
    "cons": 12
  })
})

/**
 * trae un jugador especifico
 */
 router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { estado } = req.query;
  res.json({
    id,
    estado,
    "nombre": "cormac",
    "fue": 12,
    "per": 12,
    "cons": 12
  })
})

/**
 * trae de un jugador id todos sus personajes
 */
 router.get('/:id/personajes', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    "nombre": "cormac",
    "fue": 12,
    "per": 12,
    "cons": 12
  })
})

module.exports = router;