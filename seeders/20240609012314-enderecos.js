'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enderecos', [
      {
        Rua: 'Avenida Brasil',
        Numero: 100,
        Cidade: 'Rio de Janeiro',
        Estado: 'Rio de Janeiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enderecos', null, {});
  }
};

