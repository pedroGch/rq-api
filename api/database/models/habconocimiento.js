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
    mod: DataTypes.INTEGER,
    animal: DataTypes.INTEGER,
    humano: DataTypes.INTEGER,
    mineral: DataTypes.INTEGER,
    mundo: DataTypes.INTEGER,
    vegetal: DataTypes.INTEGER,
    fabricacion: DataTypes.INTEGER,
    leer_escribir_idioma: DataTypes.INTEGER,
    navegacion: DataTypes.INTEGER,
    primeros_aux: DataTypes.INTEGER,
    tratar_enfermedad: DataTypes.INTEGER,
    valorar_objetos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabConocimiento',
    freezeTableName: true
  });
  return HabConocimiento;
};