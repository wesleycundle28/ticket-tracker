const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true },
    email: {
      type: String,
      required: false,
      unique: true,
      lowercase: true,
    },
    role: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, bufferCommands: true, autoCreate: true }
);

module.exports = mongoose.model("User", UserSchema);