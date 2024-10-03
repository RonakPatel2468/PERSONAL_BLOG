const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a new post
router.post('/add', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all posts
router.get('/get/all/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).send('Post not found');
    res.json({ msg: 'Post deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
