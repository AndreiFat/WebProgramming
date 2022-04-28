const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  id: Number,
  title: String,
  description: Text,
  teacher: String,
  image: {
    data: Buffer,
    contentType: String,
  },
});
