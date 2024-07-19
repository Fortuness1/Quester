const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    date_birth: {
      type: String,
      required: true
    },
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
  }, {collection: 'users_quester'});
  
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;