'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('loans_items', [
      {
        item_id: 2,
        loan_id: 1
      },
      {
        item_id: 24,
        loan_id: 1
      },
      {
        item_id: 21,
        loan_id: 2
      },
      {
        item_id: 13,
        loan_id: 2
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


