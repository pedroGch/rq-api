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
  
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      edad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      altura: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      peso: {
        type: Sequelize.INTEGER,
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
      int_libre: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mod_defensa: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mod_ataque: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mmr_cc: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mmr_tam: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mmr_des: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      mod_danio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pto_fatiga: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      pto_golpe: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      pto_magicos: {
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