const express = require("express");
const router = express.Router();
const { getUserWithPosts } = require("../controllers/userController");

router.get("/:userId", getUserWithPosts);

module.exports = router;
