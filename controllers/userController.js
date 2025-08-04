const User = require('../models/User');
const Post = require('../models/Post');

// Get profile + posts by user ID
exports.getUserWithPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

    res.json({ user, posts });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
