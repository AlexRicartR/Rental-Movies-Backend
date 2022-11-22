'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('items', [
      {
        item_id: 1,
        name: "The Shawshank Redemption",
        rating: 9.2,
        release_date: "1994-09-10",
        type: 'Film'
      },
      {
        item_id: 2,
        name: "The Godfather",
        rating: 9.2,
        release_date: "1972-10-20",
        type: 'Film'
      },
      {
        item_id: 3,
        name: "The Dark Knight",
        rating: 9.0,
        release_date: "2008-07-14",
        type: 'Film'
      },
      {
        item_id: 4,
        name: "The Godfather Part II",
        rating: 9.0,
        release_date: "1975-10-13",
        type: 'Film'
      },
      {
        item_id: 5,
        name: "Pulp Fiction",
        rating: 8.8,
        release_date: "1995-01-13",
        type: 'Film'
      },
      {
        item_id: 6,
        name: "12 Angry Men",
        rating: 7.6,
        release_date: "1958-02-03",
        type: 'Film'
      },
      {
        item_id: 7,
        name: "Schindler's List",
        rating: 8.9,
        release_date: "1993-01-02",
        type: 'Film'
      },
      {
        item_id: 8,
        name: "The Good, the Bad and the Ugly",
        rating: 8.8,
        release_date: "1968-08-07",
        type: 'Film'
      },
      {
        item_id: 9,
        name: "Fight Club",
        rating: 8.7,
        release_date: "1999-11-05",
        type: 'Film'
      },
      {
        item_id: 10,
        name: 'Band of Brothers',
        rating: 9.4,
        release_date: '2001-09-09',
        type: 'Serie'
      },
      {
        item_id: 11,
        name: 'The Wire',
        rating: 9.3,
        release_date: '2002-06-02',
        type: 'Serie'
      },
      {
        item_id: 12,
        name: 'The Sopranos',
        rating: 9.2,
        release_date: '1999-01-10',
        type: 'Serie'
      },
      {
        item_id: 13,
        name: 'Game of Thrones',
        rating: 8.7,
        release_date: '2011-05-16',
        type: 'Serie'
      },
      {
        item_id: 14,
        name: 'Rick and Morty',
        rating: 9.1,
        release_date: '2013-02-21',
        type: 'Serie'
      },
      {
        item_id: 15,
        name: 'Seinfeld',
        rating: 8.9,
        release_date: '1989-10-17',
        type: 'Serie'
      },
      {
        item_id: 16,
        name: 'Better Call Saul',
        rating: 8.5,
        release_date: '2015-05-11',
        type: 'Serie'
      },
      {
        item_id: 17,
        name: 'Friends',
        rating: 8.8,
        release_date: '1994-08-16',
        type: 'Film'
      },
      {
        item_id: 18,
        name: 'The Matrix',
        rating: 8.2,
        release_date: '1999-06-08',
        type: 'Film'
      },
      {
        item_id: 19,
        name: 'Narcos',
        rating: 7.8,
        release_date: '2015-07-18',
        type: 'Serie'
      },
      {
        item_id: 20,
        name: 'The Lord of the Rings: The Two Towers',
        rating: 8.7,
        release_date: '2002-03-18',
        type: 'Film'
      },
      {
        item_id: 21,
        name: 'The Mandalorian',
        rating: 8.7,
        release_date: '2019-06-03',
        type: 'Serie'
      },
      {
        item_id: 22,
        name: 'Se7en',
        rating: 8.6,
        release_date: '1995-01-25',
        type: 'Film'
      },
      {
        item_id: 23,
        name: 'Goodfellas',
        rating: 8.7,
        release_date: '1990-06-26',
        type: 'Film'
      },
      {
        item_id: 24,
        name: 'The Silence of the Lambs',
        rating: 8.6,
        release_date: '1991-08-17',
        type: 'Film'
      },
      {
        item_id: 25,
        name: 'City of God',
        rating: 8.6,
        release_date: '2002-10-21',
        type: 'Film'
      },
      {
        item_id: 26,
        name: 'Terminator 2: Judgment Day',
        rating: 8.5,
        release_date: '1991-03-15',
        type: 'Film'
      },
      {
        item_id: 27,
        name: 'The Pianist',
        rating: 8.5,
        release_date: '2002-04-15',
        type: 'Film'
      },
      {
        item_id: 28,
        name: 'Gladiator',
        rating: 8.5,
        release_date: '2000-11-21',
        type: 'Film'
      },
      {
        item_id: 29,
        name: 'American History X',
        rating: 8.5,
        release_date: '1998-03-09',
        type: 'Film'
      },
      {
        item_id: 30,
        name: 'House',
        rating: 8.7,
        release_date: '2004-11-14',
        type: 'Serie'
      },
      {
        item_id: 31,
        name: 'The Shield',
        rating: 8.7,
        release_date: '2002-03-24',
        type: 'Serie'
      },
      {
        item_id: 32,
        name: 'Stranger Things',
        rating: 8.6,
        release_date: '2016-01-20',
        type: 'Serie'
      },
      {
        item_id: 33,
        name: 'Mad Men',
        rating: 8.6,
        release_date: '2007-04-21',
        type: 'Serie'
      },
      {
        item_id: 34,
        name: 'The Marvelous Mrs. Maisel',
        rating: 8.6,
        release_date: '2017-05-02',
        type: 'Serie'
      },
      {
        item_id: 35,
        name: 'The Crown',
        rating: 4.0,
        release_date: '2016-01-17',
        type: 'Serie'
      },
      {
        item_id: 36,
        name: 'Line of Duty',
        rating: 4.0,
        release_date: '2012-08-14',
        type: 'Serie'
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
