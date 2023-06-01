/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personaje', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jugadorId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      culturaId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      especieId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      razaId: {
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
      religionId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesionPadreId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesionMadreId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profesionAventurero: {
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
      oFue: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oCon: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oDes: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oPer: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oAsp: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oTam: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      oInt: {
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
    await queryInterface.dropTable('Personaje');
  }
};