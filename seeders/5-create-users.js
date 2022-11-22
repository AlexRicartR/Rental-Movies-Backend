'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        name: "user",
        email: "user@user.com",
        birthDate: "1991-05-04",
        password: "$2a$12$Jl9oCqWA8Lws7MQCtOjnwevbnMfB6eDc5uhO0bPIt1EGSN.ai.Woe",
        id_usertype: 2,
        updatedAt: date,
        createdAt: date
      },
      // User password: Bootcamp2022
      {
        user_id: 2,
        name: "admin",
        email: "admin@admin.com",
        birthDate: "1992-11-16",
        password: "$2a$12$Jl9oCqWA8Lws7MQCtOjnwevbnMfB6eDc5uhO0bPIt1EGSN.ai.Woe",
        id_usertype: 1,
        updatedAt: date,
        createdAt: date
      }
      // Admin password: Bootcamp2022
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
