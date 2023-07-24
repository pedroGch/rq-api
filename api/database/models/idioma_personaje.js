'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class idioma_personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      idioma_personaje.belongsTo(models.Personaje)
      idioma_personaje.belongsTo(models.Idioma)
    }
  }
  idioma_personaje.init({
    nombre: DataTypes.STRING,
    percentil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'idioma_personaje',
    freezeTableName: true
  });
  return idioma_personaje;
};