'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dios.init({
    nombre: DataTypes.STRING,
    lore: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Dios',
  });
  return Dios;
};