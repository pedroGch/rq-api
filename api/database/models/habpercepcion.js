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
    mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buscar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    },
    escuchar:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    }, 
    gustar:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    }, 
    oler:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    }, 
    otear:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    }, 
    rastrear:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    }, 
    sentir:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    } 
  }, {
    sequelize,
    modelName: 'HabPercepcion',
    freezeTableName: true
  });
  return HabPercepcion;
};