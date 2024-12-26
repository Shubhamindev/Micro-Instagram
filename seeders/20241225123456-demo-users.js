module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'shubham kumar',
      mobile_number: '9084253488', // Valid unique mobile number
      address: 'beta 1 block A greater noida', // Valid address
      post_count: 0, // Default value is 0, if not required
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'samrat singh',
      mobile_number: '1234556899', // Valid unique mobile number
      address: 'A19 beta 1 block a', // Valid address
      post_count: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
