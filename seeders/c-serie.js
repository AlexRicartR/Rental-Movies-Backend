'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('series', [{
        title : "Band of Brothers",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Sopranos",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Game of Thrones",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Rick and Morty",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The Office",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Seinfield",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Better Call Saul",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Twin Peaks",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        title : "Dragon Ball Z", 
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "One Piece",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Peaky Blinders",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "House",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Mad Men",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "House of Cards",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('series', null, {});
     
  }
};
