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
    mod:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }, 
    cond_carretas:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    }, 
    inventar:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    }, 
    ocultar:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    }, 
    trucos_manos:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    } 
  }, {
    sequelize,
    modelName: 'HabManipulacion',
    freezeTableName: true
  });
  return HabManipulacion;
};