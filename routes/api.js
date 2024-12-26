const express = require('express');
const { User, Post } = require('../models'); // Import models
const user = require('../models/user');
const router = express.Router();

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({ include: [{ model: User, as: 'user' }] });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a post for a user
router.post('/users/:userId/posts', async (req, res) => {
    const { userId } = req.params;
    const { title, description, images } = req.body;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const post = await Post.create({ title, description, userId, images });
      await user.increment('post_count');
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Route to edit a post
router.put('/users/:userId/posts', async (req, res) => {
    const { userId } = req.params;
    const { title, description, images } = req.body;
  
    try {
      
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  

      const post = await Post.findOne({
        where: { userId },
        order: [['createdAt', 'DESC']] 
      });
  
      if (!post) {
        return res.status(404).json({ message: 'No posts found for this user' });
      }
  
      
      await post.update({ title, description, images });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Route to get all posts of a specific user
router.get('/users/:userId/posts', async (req, res) => {
    const { userId } = req.params; 
  
    try {
      
      const posts = await Post.findAll({
        where: { userId }, 
        include: [{ model: User, as: 'user' }], 
      });
  
      if (posts.length === 0) {
        return res.status(404).json({ message: 'No posts found for this user' });
      }
  
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Route to delete a post

router.delete('/users/:userId/posts', async (req, res) => {
    const { userId } = req.params;
  
    try {
      
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const post = await Post.findOne({
        where: { userId },
        order: [['createdAt', 'DESC']] 
      });
  
      if (!post) {
        return res.status(404).json({ message: 'No posts found for this user' });
      }
  
      
      await post.destroy();
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
