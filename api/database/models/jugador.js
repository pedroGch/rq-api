const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jugador.hasMany(models.Personaje)
    }
  }
  Jugador.init({
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Jugador',
    freezeTableName: true
  });
  return Jugador;
};