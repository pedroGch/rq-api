'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HabComunicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HabComunicacion.hasOne(models.Personaje)
    }
  }
  HabComunicacion.init({
    mod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    actuar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    cantar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    habla_fluida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    hablar_idioma_propio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    oratoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    regatear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    seduccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    }
  }, {
    sequelize,
    modelName: 'HabComunicacion',
    freezeTableName: true
  });
  return HabComunicacion;
};