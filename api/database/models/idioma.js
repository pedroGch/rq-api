'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Idioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Idioma.hasMany(models.idioma_personaje)
    }
  }
  Idioma.init({
    nombre: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Idioma',
    freezeTableName: true
  });
  return Idioma;
};