const joi = require('joi');

const id = joi.number().integer()
const nombre = joi.string();
const cultura = joi.string();
const fue = joi.number().integer().min(7).max(18);
const con = joi.number().integer().min(7).max(18);
const tam = joi.number().integer().min(7).max(18);
const int = joi.number().integer().min(7).max(18);
const per = joi.number().integer().min(7).max(18);
const des = joi.number().integer().min(7).max(18);
const asp = joi.number().integer().min(7).max(18);

const createPersonaje = joi.object({
  id: id,
  nombre: nombre.required(),
  cultura: cultura.required(),
  fue: fue.required(),
  con: con.required(),
  tam: tam.required(),
  int: int.required(),
  per: per.required(),
  des: des.required(),
  asp: asp.required()

});

module.exports = {createPersonaje}