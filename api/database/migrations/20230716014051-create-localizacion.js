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
        type: Sequelize.INTEGER
      },
      cabeza_pg: {
        type: Sequelize.INTEGER
      },
      brazo_derecho_pa: {
        type: Sequelize.INTEGER
      },
      brazo_derecho_pg: {
        type: Sequelize.INTEGER
      },
      brazo_izquierdo_pa: {
        type: Sequelize.INTEGER
      },
      brazo_izquierdo_pg: {
        type: Sequelize.INTEGER
      },
      pierna_derecha_pa: {
        type: Sequelize.INTEGER
      },
      pierna_derecha_pg: {
        type: Sequelize.INTEGER
      },
      pecho_pa: {
        type: Sequelize.INTEGER
      },
      pecho_pg: {
        type: Sequelize.INTEGER
      },
      abdomen_pa: {
        type: Sequelize.INTEGER
      },
      abdomen_pg: {
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
    await queryInterface.dropTable('Localizacion');
  }
};