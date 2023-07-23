'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoArma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoArma.hasMany(models.Arma)
    }
  }
  TipoArma.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoArma',
    freezeTableName: true
  });
  return TipoArma;
};