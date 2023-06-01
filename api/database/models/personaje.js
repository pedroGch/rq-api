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
      Personaje.hasOne(models.Cultura)
    }
  }
  Personaje.init({
    jugadorId: DataTypes.INTEGER,
    culturaId: DataTypes.INTEGER,
    especieId: DataTypes.INTEGER,
    razaId: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    religionId: DataTypes.INTEGER,
    profesionPadreId: DataTypes.INTEGER,
    profesionMadreId: DataTypes.INTEGER,
    profesionAventurero: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    culturaId: DataTypes.STRING,
    fue: DataTypes.SMALLINT,
    con: DataTypes.SMALLINT,
    des: DataTypes.SMALLINT,
    per: DataTypes.SMALLINT,
    asp: DataTypes.SMALLINT,
    tam: DataTypes.SMALLINT,
    int: DataTypes.SMALLINT,
    oFue: DataTypes.SMALLINT,
    oCon: DataTypes.SMALLINT,
    oDes: DataTypes.SMALLINT,
    oPer: DataTypes.SMALLINT,
    oAsp: DataTypes.SMALLINT,
    oTam: DataTypes.SMALLINT,
    oInt: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Personaje',
    freezeTableName: true
  });
  return Personaje;
};