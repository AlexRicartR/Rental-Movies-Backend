'use strict';
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 2,
        username: "user",
        surname_user: "surname",
        email: "user@user.com",
        user_password: "$2b$10$LM91Mno9DN0Rn1IQve/younFFjVX7EI5wvKNXUjvBILvj0K2s3aE.",
        admin_status: false
      },
      {
        id_user: 3,
        username: "admin",
        surname_user: "adminsurname",
        email: "admin@admin.com",
        user_password: "$2b$10$LM91Mno9DN0Rn1IQve/younFFjVX7EI5wvKNXUjvBILvj0K2s3aE.",
        admin_status: true
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
