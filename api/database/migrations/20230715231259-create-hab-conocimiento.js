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
      mod: {
        type: Sequelize.INTEGER
      },
      animal: {
        type: Sequelize.INTEGER
      },
      humano: {
        type: Sequelize.INTEGER
      },
      mineral: {
        type: Sequelize.INTEGER
      },
      mundo: {
        type: Sequelize.INTEGER
      },
      vegetal: {
        type: Sequelize.INTEGER
      },
      fabricacion: {
        type: Sequelize.INTEGER
      },
      leer_escribir_idioma: {
        type: Sequelize.INTEGER
      },
      navegacion: {
        type: Sequelize.INTEGER
      },
      primeros_aux: {
        type: Sequelize.INTEGER
      },
      tratar_enfermedad: {
        type: Sequelize.INTEGER
      },
      valorar_objetos: {
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
    await queryInterface.dropTable('HabConocimiento');
  }
};