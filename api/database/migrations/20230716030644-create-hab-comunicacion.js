'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabComunicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mod: {
        type: Sequelize.INTEGER
      },
      actuar: {
        type: Sequelize.INTEGER
      },
      cantar: {
        type: Sequelize.INTEGER
      },
      habla_fluida: {
        type: Sequelize.INTEGER
      },
      hablar_idioma_propio: {
        type: Sequelize.INTEGER
      },
      oratoria: {
        type: Sequelize.INTEGER
      },
      regatear: {
        type: Sequelize.INTEGER
      },
      seduccion: {
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
    await queryInterface.dropTable('HabComunicacions');
  }
};