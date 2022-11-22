'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('films', [
      {
        id_film: 1,
        genre: 'drama',
        item_id: 1
      },
      {
        id_film: 2,
        genre: 'crime',
        item_id: 2
      },
      {
        id_film: 3,
        genre: 'action',
        item_id: 3
      },
      {
        id_film: 4,
        genre: 'crime',
        item_id: 4
      },
      {
        id_film: 5,
        genre: 'action',
        item_id: 5
      },
      {
        id_film: 6,
        genre: 'drama',
        item_id: 6
      },
      {
        id_film: 7,
        genre: 'drama',
        item_id: 7
      },
      {
        id_film: 8,
        genre: 'action',
        item_id: 8
      },
      {
        id_film: 9,
        genre: 'thriller',
        item_id: 9
      },
      {
        id_film: 10,
        genre: 'action',
        item_id: 17
      },
      {
        id_film: 11,
        genre: 'drama',
        item_id: 18
      },
      {
        id_film: 12,
        genre: 'action',
        item_id: 20
      },
      {
        id_film: 13,
        genre: 'crime',
        item_id: 22
      },
      {
        id_film: 14,
        genre: 'crime',
        item_id: 23
      },
      {
        id_film: 15,
        genre: 'thriller',
        item_id: 24
      },
      {
        id_film: 16,
        genre: 'drama',
        item_id: 25
      },
      {
        id_film: 17,
        genre: 'action',
        item_id: 26
      },
      {
        id_film: 18,
        genre: 'drama',
        item_id: 27
      },
      {
        id_film: 19,
        genre: 'action',
        item_id: 28
      },
      {
        id_film: 20,
        genre: 'drama',
        item_id: 29
      },
      
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
