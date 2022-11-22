'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [
      {
        id_serie: 1,
        next_episode: '2022-11-30',
        permission: false,
        item_id: 10
      },
      {
        id_serie: 2,
        next_episode: '2022-11-25',
        permission: true,
        item_id: 11
      },
      {
        id_serie: 3,
        next_episode: '2022-12-10',
        permission: false,
        item_id: 12
      },
      {
        id_serie: 4,
        next_episode: '2022-12-05',
        permission: true,
        item_id: 13
      },
      {
        id_serie: 5,
        next_episode: '2022-11-30',
        permission: true,
        item_id: 14
      },
      {
        id_serie: 6,
        next_episode: '2020-12-30',
        permission: true,
        item_id: 15
      },
      {
        id_serie: 7,
        next_episode: '2022-11-14',
        permission: true,
        item_id: 16
      },
      {
        id_serie: 8,
        next_episode: '2022-11-25',
        permission: true,
        item_id: 19
      },
      {
        id_serie: 9,
        next_episode: '2022-11-30',
        permission: false,
        item_id: 21
      },
      {
        id_serie: 10,
        next_episode: '2022-11-30',
        permission: true,
        item_id: 30
      },
      {
        id_serie: 11,
        next_episode: '2022-11-30',
        permission: false,
        item_id: 31
      },
      {
        id_serie: 12,
        next_episode: '2022-11-30',
        permission: true,
        item_id: 32
      },
      {
        id_serie: 13,
        next_episode: '2022-11-30',
        permission: false,
        item_id: 33
      },
      {
        id_serie: 14,
        next_episode: '2022-11-30',
        permission: true,
        item_id: 34
      },
      {
        id_serie: 15,
        next_episode: '2022-11-30',
        permission: false,
        item_id: 35
      },
      {
        id_serie: 16,
        next_episode: '2022-11-30',
        permission: true,
        item_id: 36
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
