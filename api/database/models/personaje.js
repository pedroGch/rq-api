'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personaje.init({
    nombre: DataTypes.STRING,
    cultura: DataTypes.STRING,
    fue: DataTypes.SMALLINT,
    con: DataTypes.SMALLINT,
    des: DataTypes.SMALLINT,
    per: DataTypes.SMALLINT,
    asp: DataTypes.SMALLINT,
    tam: DataTypes.SMALLINT,
    int: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};