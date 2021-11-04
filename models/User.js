const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  personName: {
    type: String,
    required: true,
  },
  personUsername: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("persons", UserSchema);
