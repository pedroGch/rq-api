'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MagiaEspiritual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MagiaEspiritual.hasMany(models.Personaje)
    }
  }
  MagiaEspiritual.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    costo: DataTypes.INTEGER,
    duracion: DataTypes.INTEGER,
    apilable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MagiaEspiritual',
    freezeTableName: true
  });
  return MagiaEspiritual;
};