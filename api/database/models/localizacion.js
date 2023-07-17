'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Localizacion.hasOne(models.Personaje)
    }
  }
  Localizacion.init({
    cabeza_pa: DataTypes.INTEGER,
    cabeza_pg: DataTypes.INTEGER,
    brazo_derecho_pa: DataTypes.INTEGER,
    brazo_derecho_pg: DataTypes.INTEGER,
    brazo_izquierdo_pa: DataTypes.INTEGER,
    brazo_izquierdo_pg: DataTypes.INTEGER,
    pierna_derecha_pa: DataTypes.INTEGER,
    pierna_derecha_pg: DataTypes.INTEGER,
    pecho_pa: DataTypes.INTEGER,
    pecho_pg: DataTypes.INTEGER,
    abdomen_pa: DataTypes.INTEGER,
    abdomen_pg: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Localizacion',
    freezeTableName: true
  });
  return Localizacion;
};