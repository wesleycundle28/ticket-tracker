const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/protect");
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  logoutUser,
  deleteUser,
} = require("../controllers/userControllers");

//register new User
router.post("/register", registerUser);
//login specific user
router.post("/login", loginUser);
//get all users
router.get("/getusers", protect, getUsers);
//get a user
router.get("/getuser", protect, getUser);
//update current user
router.patch("/update", protect, updateUser);
//logout current user
router.post("/logout", protect, logoutUser);
//delete current user
router.delete("/delete", protect, deleteUser);

module.exports = router;
