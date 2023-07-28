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
    cabeza_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    brazo_derecho_pa: DataTypes.INTEGER,
    brazo_derecho_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    brazo_izquierdo_pa: DataTypes.INTEGER,
    brazo_izquierdo_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    pierna_derecha_pa: DataTypes.INTEGER,
    pierna_derecha_pg:{type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    pierna_izquierda_pa: DataTypes.INTEGER,
    pierna_izquierda_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    pecho_pa: DataTypes.INTEGER,
    pecho_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    abdomen_pa: DataTypes.INTEGER,
    abdomen_pg: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
  }, {
    sequelize,
    modelName: 'Localizacion',
    freezeTableName: true
  });
  return Localizacion;
};