'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Arma', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      danio: {
        type: Sequelize.INTEGER
      },
      mrTf: {
        type: Sequelize.INTEGER
      },
      paAlc: {
        type: Sequelize.INTEGER
      },
      percentil_ataque: {
        type: Sequelize.INTEGER
      },
      percentil_danio: {
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
    await queryInterface.dropTable('Arma');
  }
};