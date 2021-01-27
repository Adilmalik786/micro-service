'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   return queryInterface.bulkInsert('macservicesettings', [{
    category: 'mac',
    service_name: 'dummy',
    last_editor: 'adil',
    settings: {
      "timer": "600",
      "enabled": "true"
    },
    createdAt:new Date(),
    updatedAt:new Date(),
  }], {}, { settings: { type: new Sequelize.JSON() } });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
