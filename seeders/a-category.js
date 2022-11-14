'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{
        type: 'Action',
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Comedy',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Drama',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Fantasy',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Horror',
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Mystery',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Romance',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Thriller',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Western',
        age: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
