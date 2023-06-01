'use strict';
const {
  Model
} = require('sequelize');
const cultura = require('./cultura');
module.exports = (sequelize, DataTypes) => {
  class Profesion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profesion.belongsTo(models.Cultura)
    }
  }
  Profesion.init({
    nombre: DataTypes.STRING,
    desde: DataTypes.SMALLINT,
    hasta: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Profesion',
  });
  return Profesion;
};