'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loans', {
      id_item: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loan_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      return_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"users",
          key:"id_user"
        }
      },
      film_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "films",
          key: "id_film"
        }
      },
      serie_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "series",
          key: "id_serie"
        }
      }
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loans');
  }
};