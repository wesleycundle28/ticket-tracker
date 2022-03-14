require("dotenv").config();
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../middleware/generateToken");
const User = require("../models/userModel");

//@desc Register new user
//@route Post /user/registerd
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  //info from client
  const { name, email, password, role } = await req.body;
  // const emailLower = email.toString().toLowerCase();
  //check for user in database
  const userExists = await User.findOne({ email });
  //response if user does not exist in the database
  if (!userExists) {
    // salt and hash password for database storage,create new user
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await new User({
      name: name,
      email: email,
      password: hash,
      role: role,
    });
    await user.save();
    //send new user info to front end
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
      success: "account created successfully ",
    });
    //response if user exists in database
  } else if (userExists) {
    res.json({ error: "user already exists" });
  }
});

//@desc Authenticate a user
//@route POST /user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  //info from client
  const { email, password } = await req.body;
  const emailLower = email.toString().toLowerCase();
  //check for user in database
  const user = await User.findOne({ emailLower });
  //response if user exists and password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    //send user info to front end
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
      success: "logged in successfully",
    });

    //response if user exists nd password is not correct
  } else if (user && !(await bcrypt.compare(password, user.password))) {
    res.json({ error: "invalid password" });
    //response if user does not exist
  } else if (!user) {
    res.json({ error: "user does not exist" });
    //catch all response
  } else {
    res.json({ error: "login failed, please try again" });
  }
});

//@desc Logout current user
//@route POST /user/logut
//@access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.json({ logoutSuccess: "you have successfully logged out" });
});

//@desc Get users from database
//@route GET /users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  const userRole = req.user.role;
  if (userRole === "admin") {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      (error) => {
        res.json({ message: error });
      };
    }
  } else if (userRole === "developer") {
    res.json({ warning: "you are not authorized to view users" });
  }
});

//@desc Get a user from database
//@route GET /user/:id
//@access Private

const getUser = asyncHandler(async (req, res) => {
  const id = req.body.id;
  const userRole = req.user.role;
  if (userRole === "admin") {
    try {
      const user = await User.findById(id);
      res.json(user);
    } catch {
      (error) => {
        res.json({ message: error });
      };
    }
  } else if (userRole === "developer") {
    res.json({ warning: "you do not have permission to view users" });
  } else {
    res.json({ error: "something went wrong" });
  }
});

//@desc Update specified user
//route PATCH /user/update
//access private
const updateUser = asyncHandler(async (req, res) => {
  //aquire user's role
  const userRole = await req.user.role;
  //retrieve info for user to update
  const { _id, name, email, password, role } = await req.body;
  //salt and hash password for storage in database
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //response if all fields have been filled
  if (name && email && password && role) {
    //find user by id and update specified fields
    const userToUpdate = await User.findOneAndUpdate(
      { _id: _id },
      { name: name, email: email, password: hash, role: role },
      { new: true }
    );
    //response if user role is admin and user to update exists
    if (userRole === "admin" && userToUpdate) {
      res.json({ success: "user updated successfully" });
      //response if user role is developer and user to update exists
    } else if (userRole === "developer" && userToUpdate) {
      res.json({ warning: "you do not have permission to update users!" });
      //response if user does not exist
    } else if (!userToUpdate) {
      res.json({ error: "user not found!" });
      //catch all error response
    } else {
      res.json({ error: "something went wrong" });
    }
    //response if one of the fields is missing/empty
  } else if (!name || !email || !password || !role) {
    res.json({ error: "please fill in all fields!" });
    //catch all error response
  } else {
    res.json({ error: "something went wrong" });
  }
});

//desc Delete specified user
//@ route DELETE /user/delete
//@access private
const deleteUser = asyncHandler(async (req, res) => {
  //pull user's role
  const userRole = await req.user.role;
  //users email to find in database
  const email = await req.body.email;
  //find user by email
  const userToDelete = await User.findOneAndRemove({ email: email });
  //check if user role is admin & user to delete exists
  if (userRole === "admin" && userToDelete) {
    res.json({ success: "user deleted successfully" });
    //check if user role is developer and user to delete exists
  } else if (userRole === "developer" && userToDelete) {
    res.json({ Warning: "you do not have permission to do delete accounts!" });
    //catch if user to delete is not found in database
  } else if (!userToDelete) {
    res.json({ error: "user not found!" });
    //catch all for any other unforseen errors
  } else {
    res.json({ error: "something went wrong" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
