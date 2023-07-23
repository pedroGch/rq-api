'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class idioma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  idioma.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'idioma',
    freezeTableName: true
  });
  return idioma;
};