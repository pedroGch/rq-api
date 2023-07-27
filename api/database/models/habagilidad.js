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
    arrojar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    },
    esquivar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    montar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    nadar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15
    },
    remar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    saltar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 25
    },
    trpar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 40
    },
    velero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'HabAgilidad',
    freezeTableName: true
  });
  return HabAgilidad;
};