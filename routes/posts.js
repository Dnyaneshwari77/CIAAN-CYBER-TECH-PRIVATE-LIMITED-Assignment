const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { createPost, getAllPosts } = require('../controllers/postController');

router.post('/', verifyToken, createPost); // Create post
router.get('/', getAllPosts);              // Public feed

module.exports = router;
