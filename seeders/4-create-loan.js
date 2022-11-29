'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('loans', [
      {
        id_item: 1,
        loan_date: "2022-11-13 00:00:00",
        return_date: "2022-11-20 00:00:00",
        user_id: 1,
        film_id: 3
      }, {
        id_item: 2,
        loan_date: "2022-11-14 00:00:00",
        return_date: "2022-12-25 00:00:00",
        user_id: 1,
        film_id: 4
      }, {
        id_item: 3,
        loan_date: "2022-12-13 00:00:00",
        return_date: "2023-01-05 00:00:00",
        user_id: 1,
        serie_id: 2
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
 
  }
};
