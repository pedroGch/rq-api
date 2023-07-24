'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MagiaDivinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      costo: {
        type: Sequelize.INTEGER
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      apilable: {
        type: Sequelize.BOOLEAN
      },
      habilitada: {
        type: Sequelize.BOOLEAN
      },
      costo_adquisicion: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MagiaDivinas');
  }
};