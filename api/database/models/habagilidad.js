'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabAgilidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabAgilidad.hasOne(models.Personaje)
    }
  }
  HabAgilidad.init({
    arrojar: DataTypes.INTEGER,
    esquivar: DataTypes.INTEGER,
    montar: DataTypes.INTEGER,
    nadar: DataTypes.INTEGER,
    remar: DataTypes.INTEGER,
    saltar: DataTypes.INTEGER,
    trpar: DataTypes.INTEGER,
    velero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabAgilidad',
    freezeTableName: true
  });
  return HabAgilidad;
};