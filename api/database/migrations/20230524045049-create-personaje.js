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
      jugador_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cultura_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      especie_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      raza_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      edad: {
        type: Sequelize.STRING,
        allowNull: false
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      religion_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesion_padre_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesion_madre_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesion_aventurero: {
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
      o_fue: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_con: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_des: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_per: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_asp: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_tam: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      o_int: {
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