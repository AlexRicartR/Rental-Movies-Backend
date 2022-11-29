'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      user_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname_user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admin_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
      
    });
    
  },
  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};