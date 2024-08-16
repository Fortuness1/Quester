const mongoose = require("mongoose");

const findUserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
},{collection: 'user'});
  
const FindUserModel = mongoose.model("FindUser", findUserSchema);

module.exports = FindUserModel;