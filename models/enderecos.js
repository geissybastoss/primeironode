'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enderecos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enderecos.init({
    Rua: DataTypes.STRING,
    Numero: DataTypes.INTEGER,
    Cidade: DataTypes.STRING,
    Estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enderecos',
  });
  return Enderecos;
};