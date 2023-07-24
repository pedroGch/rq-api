'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class instrumento_personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      instrumento_personaje.belongsTo(models.Personaje)
      instrumento_personaje.belongsTo(models.Instrumento)
    }
  }
  instrumento_personaje.init({
    nombre: DataTypes.STRING,
    percentil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'instrumento_personaje',
    freezeTableName: true
  });
  return instrumento_personaje;
};