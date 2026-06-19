const express = require("express");
const {
  GetConversation,
  getmyConversations,
  getsingleConversation,
} = require("../Controllers/ConversationController");

const { protect } = require("../Middleware/Middleware");

const router = express.Router();

router.post("/:userId", protect, GetConversation);
router.get("/", protect, getmyConversations);
router.get("/:conversationId", protect, getsingleConversation);

module.exports = router;
