'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Localizacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cabeza_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      cabeza_pg: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      brazo_derecho_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      brazo_derecho_pg: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      brazo_izquierdo_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      brazo_izquierdo_pg: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pierna_derecha_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pierna_derecha_pg: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pierna_izquierda_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pierna_izquierda_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pecho_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      pecho_pg: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      abdomen_pa: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      abdomen_pg: {
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
    await queryInterface.dropTable('Localizacion');
  }
};