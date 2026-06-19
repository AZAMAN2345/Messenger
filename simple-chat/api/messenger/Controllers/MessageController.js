const Message = require("../Models/MessageModel");
const Conversation = require("../Models/ConvoModel");

exports.sendMessage = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ message: "Message text is required" });
    }

    const conversation = await Conversation.findOne({
      _id: req.params.conversationId,
      members: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const message = await Message.create({
      conversation: conversation._id,
      sender: req.user._id,
      text: text.trim(),
      readBy: [req.user._id],
    });

    conversation.lastMessage = message._id;
    await conversation.save();

    const populatedMessage = await message.populate(
      "sender",
      "username avatar",
    );

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      _id: req.params.conversationId,
      members: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ message: "Not found" });
    }

    const messages = await Message.find({
      conversation: req.params.conversationId,
    })
      .populate("sender", "username avatar")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findOne({
      _id: req.params.messageId,
      sender: req.user._id,
    });

    if (!message) {
      return res.status(404).json({ message: "Not found" });
    }

    await message.deleteOne();

    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.markMessagesAsRead = async (req, res) => {
  try {
    await Message.updateMany(
      {
        conversation: req.params.conversationId,
        readBy: { $ne: req.user._id },
      },
      {
        $push: { readBy: req.user._id },
      },
    );

    res.json({ message: "Messages marked as read" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
