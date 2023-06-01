'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cultura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cultura.hasOne(models.Profesion)
      Cultura.belongsTo(models.Personaje)
    }
  }
  Cultura.init({
    nombre: DataTypes.STRING,
    ProfesionId: DataTypes.SMALLINT,
    desde: DataTypes.SMALLINT,
    hasta: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Cultura',
    freezeTableName: true
  });
  return Cultura;
};