const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/protect");
const {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
} = require("../controllers/userControllers");

//register new User
router.post("/register", registerUser);
//login specific user
router.post("/login", loginUser);
//logout current user
router.post("/logout", protect, logoutUser);
//delete current user
router.delete("/delete", protect, deleteUser);

module.exports = router;