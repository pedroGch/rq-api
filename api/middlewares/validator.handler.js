const jwt = require('jsonwebtoken')
const boom = require("@hapi/boom");
require('dotenv').config();

function validatorHandler(schema, property) {
  return (req,res,next) =>{
    const data = req[property];

    const {error} = schema.validate(data, {abortEarly:false})
    if (error){
      next(boom.badRequest(error));
    }
    next();
  }
}

function verificarToken (req, res, next) {
  const token = req.headers['token']
  if (token){
    jwt.verify(token, process.env.SECRETKEY, (err, user) =>{
      if(err){
        res.send('Tu conección con glorantha se interrumpio')
      }else{
        next()
      }
    })
  }
}

module.exports = {
  validatorHandler,
  verificarToken
}