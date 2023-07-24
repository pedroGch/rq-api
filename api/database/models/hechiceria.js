'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hechiceria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hechiceria.hasMany(models.Personaje)
    }
  }
  Hechiceria.init({
    nivel: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    coste: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hechiceria',
    freezeTableName: true
  });
  return Hechiceria;
};