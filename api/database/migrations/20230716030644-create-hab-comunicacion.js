'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabComunicacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actuar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      cantar: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      habla_fluida: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      hablar_idioma_propio: {
        type: Sequelize.INTEGER,
        defaultValue: 30
      },
      oratoria: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      regatear: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      seduccion: {
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
    await queryInterface.dropTable('HabComunicacion');
  }
};