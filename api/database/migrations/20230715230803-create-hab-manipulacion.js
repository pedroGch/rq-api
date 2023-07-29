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
      cond_carretas: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      inventar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      ocultar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      trucos_manos: {
        type: Sequelize.INTEGER,
        defaultValue: 5
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