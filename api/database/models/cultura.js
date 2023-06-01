'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cultura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cultura.hasOne(models.Profesion)
    }
  }
  Cultura.init({
    nombre: DataTypes.STRING,
    desde: DataTypes.SMALLINT,
    hasta: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Cultura',
  });
  return Cultura;
};