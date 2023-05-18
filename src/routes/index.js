const express = require('express');
const personajeRouter = require('./personaje.router');
const jugadorRouter = require('./jugagor.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/personaje', personajeRouter);
  router.use('/jugador', jugadorRouter);
}

module.exports = routerApi;