'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabPercepcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabPercepcion.hasOne(models.Personaje)
    }
  }
  HabPercepcion.init({
    mod: DataTypes.INTEGER,
    buscar: DataTypes.INTEGER,
    escuchar: DataTypes.INTEGER,
    gustar: DataTypes.INTEGER,
    oler: DataTypes.INTEGER,
    otear: DataTypes.INTEGER,
    rastrear: DataTypes.INTEGER,
    sentir: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabPercepcion',
    freezeTableName: true
  });
  return HabPercepcion;
};