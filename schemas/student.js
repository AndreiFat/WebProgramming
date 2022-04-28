const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  id: Number,
  name: String,
  username: Text,
  school: String,
});
