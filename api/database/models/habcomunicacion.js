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
    mod: DataTypes.INTEGER,
    actuar: DataTypes.INTEGER,
    cantar: DataTypes.INTEGER,
    habla_fluida: DataTypes.INTEGER,
    hablar_idioma_propio: DataTypes.INTEGER,
    oratoria: DataTypes.INTEGER,
    regatear: DataTypes.INTEGER,
    seduccion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HabComunicacion',
    freezeTableName: true
  });
  return HabComunicacion;
};