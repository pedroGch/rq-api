'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Personaje.init({
    jugador_id: DataTypes.INTEGER,
    cultura_id: DataTypes.INTEGER,
    especie_id: DataTypes.INTEGER,
    raza_id: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    religion_id: DataTypes.INTEGER,
    profesion_padre_id: DataTypes.INTEGER,
    profesion_madre_id: DataTypes.INTEGER,
    profesion_aventurero: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    cultura_id: DataTypes.STRING,
    fue: DataTypes.SMALLINT,
    con: DataTypes.SMALLINT,
    des: DataTypes.SMALLINT,
    per: DataTypes.SMALLINT,
    asp: DataTypes.SMALLINT,
    tam: DataTypes.SMALLINT,
    int: DataTypes.SMALLINT,
    o_fue: DataTypes.SMALLINT,
    o_con: DataTypes.SMALLINT,
    o_des: DataTypes.SMALLINT,
    o_per: DataTypes.SMALLINT,
    o_asp: DataTypes.SMALLINT,
    o_tam: DataTypes.SMALLINT,
    o_int: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};