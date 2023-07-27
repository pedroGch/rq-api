'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabAgilidad', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      arrojar: {
        type: Sequelize.INTEGER,
        defaultValue: 25
      },
      esquivar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      montar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      nadar: {
        type: Sequelize.INTEGER,
        defaultValue: 15
      },
      remar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      saltar: {
        type: Sequelize.INTEGER,
        defaultValue: 20
      },
      trpar: {
        type: Sequelize.INTEGER,
        defaultValue: 40
      },
      velero: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('HabAgilidad');
  }
};