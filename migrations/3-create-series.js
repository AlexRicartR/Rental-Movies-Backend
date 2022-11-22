'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_serie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      next_episode: {
        type: Sequelize.DATEONLY
      },
      permission: {
        type: Sequelize.BOOLEAN
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "items",
          key: "item_id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};