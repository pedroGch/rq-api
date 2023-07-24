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
      //magias
      Personaje.belongsTo(models.Hechiceria)
      Personaje.belongsTo(models.MagiaDivina)
      Personaje.belongsTo(models.MagiaEspiritual)
      //
      Personaje.belongsTo(models.Cultura)
      Personaje.belongsTo(models.HabSigilo)
      Personaje.belongsTo(models.HabPercepcion)
      Personaje.belongsTo(models.HabManipulacion)
      Personaje.belongsTo(models.HabConocimiento)
      Personaje.belongsTo(models.Localizacion)
      Personaje.belongsTo(models.HabAgilidad)
      Personaje.belongsTo(models.HabComunicacion)
      Personaje.belongsTo(models.HabMagicas)
      Personaje.hasMany(models.idioma_personaje)
      Personaje.hasMany(models.instrumento_personaje)
      Personaje.belongsTo(models.Profesion,{
        foreignKey:{
          name: 'profesionPadresId',
        }
      })
    }
  }
  Personaje.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    altura: DataTypes.INTEGER,
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
    oInt: DataTypes.SMALLINT,
    int_libre: DataTypes.SMALLINT,
    mod_defensa: DataTypes.SMALLINT,
    mod_ataque: DataTypes.SMALLINT,
    mmr_cc: DataTypes.SMALLINT,
    mmr_tam: DataTypes.SMALLINT,
    mmr_des: DataTypes.SMALLINT,
    mod_danio: DataTypes.STRING,
    pto_fatiga: DataTypes.SMALLINT,
    pto_golpe: DataTypes.SMALLINT,
    pto_magicos: DataTypes.SMALLINT,
  }, {
    sequelize,
    modelName: 'Personaje',
    freezeTableName: true
  });
  return Personaje;
};