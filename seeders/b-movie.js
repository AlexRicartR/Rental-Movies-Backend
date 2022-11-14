'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [{
        title : "The Shwashank Redemption",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Godfather",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Dark Knight",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Godfather",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "12 Angry Men",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Lord of the Rings: The Return of the King",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Pulp Fiction",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Good, the Bad and the Ugly",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        title : "Forrest Gump", 
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Fight Club",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Se7en",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "One Flew Over the Cuckoo's Nest",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
