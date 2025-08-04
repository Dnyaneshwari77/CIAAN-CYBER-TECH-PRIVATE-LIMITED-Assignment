const Post = require('../models/Post');
const User = require('../models/User');

// Create a post
exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const newPost = new Post({ author: req.userId, content });
    await newPost.save();
    res.status(201).json({ msg: 'Post created successfully', post: newPost });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all posts with author name
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name') // include only author's name
      .sort({ createdAt: -1 });   // latest first

    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
