const express = require("express");
const {
  sendMessage,
  getMessages,
  deleteMessage,
  markMessagesAsRead,
} = require("../Controllers/MessageController");

const { protect } = require("../Middleware/Middleware");

const router = express.Router();

router.post("/:conversationId", protect, sendMessage);
router.get("/:conversationId", protect, getMessages);
router.delete("/:messageId", protect, deleteMessage);
router.put("/read/:conversationId", protect, markMessagesAsRead);

module.exports = router;
