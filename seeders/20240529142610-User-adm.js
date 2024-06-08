'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Users', [
     
     {
      firstName: 'ADM',
      lastName: 'ADM',
      email: 'adm@esbam.edu.br',
      password: 'adm123'
    }
  ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete (Users, {email: 'adm@esbam.edu.br'}, {})
  }
};
