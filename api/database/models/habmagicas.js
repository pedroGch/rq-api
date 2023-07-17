'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabMagicas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabMagicas.hasOne(models.Personaje)
    }
  }
  HabMagicas.init({
    mod: DataTypes.INTEGER,
    ceremonia: DataTypes.INTEGER,
    encantamiento: DataTypes.INTEGER,
    invocacion: DataTypes.INTEGER,
    duracion: DataTypes.INTEGER,
    intensidad: DataTypes.INTEGER,
    multiconjuro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabMagicas',
    freezeTableName: true
  });
  return HabMagicas;
};