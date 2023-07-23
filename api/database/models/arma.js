'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arma extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Arma.belongsTo(models.TipoArma)
    }
  }
  Arma.init({
    nombre: DataTypes.STRING,
    danio: DataTypes.INTEGER,
    mrTf: DataTypes.INTEGER,
    paAlc: DataTypes.INTEGER,
    percentil_ataque: DataTypes.INTEGER,
    percentil_danio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Arma',
    freezeTableName: true
  });
  return Arma;
};