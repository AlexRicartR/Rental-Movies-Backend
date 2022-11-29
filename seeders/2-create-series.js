'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [
      {
        id_serie: 1,
        title: 'Band of Brothers',
        rating: 9,
        release_date: '2001-09-09',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 2,
        title: 'The Wire',
        rating: 9,
        release_date: '2002-06-02',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 3,
        title: 'The Sopranos',
        rating: 9,
        release_date: '1999-01-10',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 4,
        title: 'Game of Thrones',
        rating: 8,
        release_date: '2011-05-16',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 5,
        title: 'Rick and Morty',
        rating: 9,
        release_date: '2013-02-21',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 6,
        title: 'Seinfeld',
        rating: 8,
        release_date: '1989-10-17',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 7,
        title: 'Better Call Saul',
        rating: 8,
        release_date: '2015-05-11',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 8,
        title: 'House',
        rating: 8,
        release_date: '2004-11-14',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 9,
        title: 'The Shield',
        rating: 8,
        release_date: '2002-03-24',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 10,
        title: 'Stranger Things',
        rating: 8,
        release_date: '2016-01-20',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 11,
        title: 'Mad Men',
        rating: 8,
        release_date: '2007-04-21',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 12,
        title: 'The Marvelous Mrs. Maisel',
        rating: 8,
        release_date: '2017-05-02',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 13,
        title: 'The Crown',
        rating: 4,
        release_date: '2016-01-17',
        in_theater: true,
        genre: "Suspense"
      },
      {
        id_serie: 14,
        title: 'Line of Duty',
        rating: 4,
        release_date: '2012-08-14',
        in_theater: true,
        genre: "Suspense"
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
