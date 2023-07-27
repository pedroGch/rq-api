'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabConocimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabConocimiento.hasOne(models.Personaje)
    }
  }
  HabConocimiento.init({
    mod:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    animal:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    humano:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    mineral:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    mundo:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    vegetal:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    fabricacion:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    leer_escribir_idioma:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    navegacion:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    primeros_aux:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    tratar_enfermedad:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    valorar_objetos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    }
  }, {
    sequelize,
    modelName: 'HabConocimiento',
    freezeTableName: true
  });
  return HabConocimiento;
};