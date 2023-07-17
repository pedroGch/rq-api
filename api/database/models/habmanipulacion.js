'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabManipulacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabManipulacion.hasOne(models.Personaje)
    }
  }
  HabManipulacion.init({
    mod: DataTypes.INTEGER,
    cond_carretas: DataTypes.INTEGER,
    inventar: DataTypes.INTEGER,
    ocultar: DataTypes.INTEGER,
    trucos_manos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabManipulacion',
    freezeTableName: true
  });
  return HabManipulacion;
};