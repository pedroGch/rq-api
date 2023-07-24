'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arma_cultura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      arma_cultura.belongsTo(models.Arma)
      arma_cultura.belongsTo(models.Cultura)
    }
  }
  arma_cultura.init({
    nombre: DataTypes.STRING,
    percentil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'arma_cultura',
    freezeTableName: true
  });
  return arma_cultura;
};