'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('loans_items', {
      loan_id_item: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'item_id'
        }
      },
      loan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'loan_id'
        },
      },
      loanIdLoan: Sequelize.INTEGER,
      itemIdItem: Sequelize.INTEGER
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('loans_items');
  }
};