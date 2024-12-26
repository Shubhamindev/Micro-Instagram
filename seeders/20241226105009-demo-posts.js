module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample posts into the posts table
    await queryInterface.bulkInsert('posts', [{
      title: 'My First Post',
      description: 'This is the description for my first post.',
      userId: 1, // Make sure to use an existing user ID from the users table
      images: JSON.stringify(['image1.jpg', 'image2.jpg']), // Use valid image filenames
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Another Post',
      description: 'Here is the description for another post.',
      userId: 1, // Use a valid user ID
      images: JSON.stringify(['image3.jpg', 'image4.jpg']),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    // If you want to roll back this seeder, delete the posts
    await queryInterface.bulkDelete('posts', null, {});
  }
};
