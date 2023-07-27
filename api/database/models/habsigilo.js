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
    mod:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }, 
    esconderse:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    }, 
    deslizarse:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    } 
  }, {
    sequelize,
    modelName: 'HabSigilo',
    freezeTableName: true
  });
  return HabSigilo;
};