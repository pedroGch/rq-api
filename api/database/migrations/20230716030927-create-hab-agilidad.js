'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabAgilidads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      arrojar: {
        type: Sequelize.INTEGER
      },
      esquivar: {
        type: Sequelize.INTEGER
      },
      montar: {
        type: Sequelize.INTEGER
      },
      nadar: {
        type: Sequelize.INTEGER
      },
      remar: {
        type: Sequelize.INTEGER
      },
      saltar: {
        type: Sequelize.INTEGER
      },
      trpar: {
        type: Sequelize.INTEGER
      },
      velero: {
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
    await queryInterface.dropTable('HabAgilidads');
  }
};