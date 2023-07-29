'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HabConocimiento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      humano: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      mineral: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      mundo: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      vegetal: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      fabricacion: {
        type: Sequelize.INTEGER,
        defaultValue: 10
      },
      leer_escribir_idioma: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      navegacion: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      primeros_aux: {
        type: Sequelize.INTEGER,
        defaultValue: 10
      },
      tratar_enfermedad: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      valorar_objetos: {
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
    await queryInterface.dropTable('HabConocimiento');
  }
};