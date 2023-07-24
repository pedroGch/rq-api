'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MagiaDivina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MagiaDivina.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    costo: DataTypes.INTEGER,
    duracion: DataTypes.INTEGER,
    apilable: DataTypes.BOOLEAN,
    habilitada: DataTypes.BOOLEAN,
    costo_adquisicion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MagiaDivina',
    freezeTableName: true
  });
  return MagiaDivina;
};