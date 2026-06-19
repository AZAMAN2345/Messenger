const User = require("../Models/UserModel");

exports.searchUsers = async (req, res) => {
  try {
    const { username = "" } = req.query;

    const users = await User.find({
      username: { $regex: username.toLowerCase(), $options: "i" },
      _id: { $ne: req.user._id },
    }).select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.params.username.toLowerCase(),
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User doesnt exist",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { avatar, bio, username } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { avatar, bio, username },
      { new: true },
    ).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
