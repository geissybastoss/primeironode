'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      NomeCompleto: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      Endereço: {
        type: Sequelize.STRING(300),
        allowNull: false
      },
      Telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas');
  }
};