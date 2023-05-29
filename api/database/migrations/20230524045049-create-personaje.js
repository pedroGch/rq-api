/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cultura: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fue: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      con: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      des: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      per: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      asp: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      tam: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      int: {
        type: Sequelize.SMALLINT,
        allowNull: false
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
    await queryInterface.dropTable('Personajes');
  }
};