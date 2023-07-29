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
    ceremonia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    encantamiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    invocacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    intensidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    multiconjuro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'HabMagicas',
    freezeTableName: true
  });
  return HabMagicas;
};