'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabManipulacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod: {
        type: Sequelize.INTEGER
      },
      cond_carretas: {
        type: Sequelize.INTEGER
      },
      inventar: {
        type: Sequelize.INTEGER
      },
      ocultar: {
        type: Sequelize.INTEGER
      },
      trucos_manos: {
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
    await queryInterface.dropTable('HabManipulacion');
  }
};