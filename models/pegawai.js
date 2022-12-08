'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pegawai.init({
    nama: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    kontrak: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pegawai',
  });
  return Pegawai;
};