'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instrumento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Instrumento.hasMany(models.instrumento_personaje)
    }
  }
  Instrumento.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instrumento',
    freezeTableName: true
  });
  return Instrumento;
};