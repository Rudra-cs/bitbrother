const User = require("../models/User");

// List contacts as per user
exports.listUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (!users) {
      users = [];
    }
    res.status(200).json({
      message: "Users fetched Successfully",
      userData: users,
    });
  } catch (err) {
    res.status(400).json({
      message: "Something Went Wrong ",
      error: err,
    });
  }
};

// create contact
exports.createUser = async (req, res) => {
  const userObj = {
    personName: req.body.pname,
    personUsername: req.body.pusername,
    password: req.body.ppassword,
  };

  try {
    const user = new User(userObj);
    await user.save();
    res.status(200).json({
      message: "User saved Successfully",
      userData: user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Something Went Wrong ",
      error: err,
    });
  }
};

// Update a user By id
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const userObj = {
    personName: req.body.pname,
    personUsername: req.body.pusername,
  };
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      $set: userObj,
    });
    if (updatedUser == null) {
      res.status(400).json({
        message: "Something went wrong!ID not found",
      });
    } else {
      res.status(200).json({
        message: "User Updated Succesfully",
        updated: updatedUser,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong!",
      error: err,
    });
  }
};

// Delete a User By Id
exports.deleteUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser == null) {
      res.status(400).json({
        message: "Something went wrong!ID not found",
      });
    } else {
      res.status(200).json({
        message: "User Deleted Succesfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      error: err,
    });
  }
};
