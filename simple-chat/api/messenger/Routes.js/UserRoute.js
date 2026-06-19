const express = require("express");
const {
  searchUsers,
  getUserByUsername,
  updateProfile,
} = require("../Controllers/UserController");
const { protect } = require("../Middleware/Middleware");

const router = express.Router();

router.get("/search", protect, searchUsers);
router.get("/:username", protect, getUserByUsername);
router.put("/me", protect, updateProfile);

module.exports = router;
