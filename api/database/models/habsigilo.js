'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabSigilo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabSigilo.hasOne(models.Personaje)
    }
  }
  HabSigilo.init({
    mod: DataTypes.INTEGER,
    esconderse: DataTypes.INTEGER,
    deslizarse: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabSigilo',
    freezeTableName: true
  });
  return HabSigilo;
};