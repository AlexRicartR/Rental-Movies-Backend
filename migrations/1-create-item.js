'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      item_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type:Sequelize.STRING,
        unique: true
      }, 
      score: Sequelize.DECIMAL(10,1),
      description: Sequelize.TEXT,
      data_premiere: Sequelize.DATEONLY,
      type: Sequelize.ENUM('Film', 'Serie'),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};