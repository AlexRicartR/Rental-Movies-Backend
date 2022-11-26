'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('films', [
      {
        id_film: 1,
        title: "The Shawshank Redemption",
        rating: 9.2,
        release_date: "1994-09-10",
        genre: "Suspense"
      },
      {
        id_film: 2,
        title: "The Godfather",
        rating: 9.2,
        release_date: "1972-10-20",
        genre: "Suspense"
      },
      {
        id_film: 3,
        title: "The Dark Knight",
        rating: 9.0,
        release_date: "2008-07-14",
        genre: "Suspense"
      },
      {
        id_film: 4,
        title: "The Godfather Part II",
        rating: 9.0,
        release_date: "1975-10-13",
        genre: "Suspense"
      },
      {
        id_film: 5,
        title: "Pulp Fiction",
        rating: 8.8,
        release_date: "1995-01-13",
        genre: "Suspense"
      },
      {
        id_film: 6,
        title: "12 Angry Men",
        rating: 7.6,
        release_date: "1958-02-03",
        genre: "Suspense"
      },
      {
        id_film: 7,
        title: "Schindler's List",
        rating: 8.9,
        release_date: "1993-01-02",
        genre: "Suspense"
      },
      {
        id_film: 8,
        title: "The Good, the Bad and the Ugly",
        rating: 8.8,
        release_date: "1968-08-07",
        genre: "Suspense"
      },
      {
        id_film: 9,
        title: "Fight Club",
        rating: 8.7,
        release_date: "1999-11-05",
        genre: "Suspense"
      },
      {
        id_film: 10,
        title: 'The Matrix',
        rating: 8.2,
        release_date: '1999-06-08',
        genre: "Suspense"
      },
      {
        id_film: 11,
        title: 'The Lord of the Rings: The Two Towers',
        rating: 8.7,
        release_date: '2002-03-18',
        genre: "Suspense"
      },
      {
        id_film: 12,
        title: 'Se7en',
        rating: 8.6,
        release_date: '1995-01-25',
        genre: "Suspense"
      },
      {
        id_film: 13,
        title: 'Goodfellas',
        rating: 8.7,
        release_date: '1990-06-26',
        genre: "Suspense"
      },
      {
        id_film: 14,
        title: 'The Silence of the Lambs',
        rating: 8.6,
        release_date: '1991-08-17',
        genre: "Suspense"
      },
      {
        id_film: 15,
        title: 'City of God',
        rating: 8.6,
        release_date: '2002-10-21',
        genre: "Suspense"
      },
      {
        id_film: 16,
        title: 'Terminator 2: Judgment Day',
        rating: 8.5,
        release_date: '1991-03-15',
        genre: "Suspense"
      },
      {
        id_film: 17,
        title: 'The Pianist',
        rating: 8.5,
        release_date: '2002-04-15',
        genre: "Suspense"
      },
      {
        id_film: 18,
        title: 'Gladiator',
        rating: 8.5,
        release_date: '2000-11-21',
        genre: "Suspense"
      },
      {
        id_film: 19,
        title: 'American History X',
        rating: 8.5,
        release_date: '1998-03-09',
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
