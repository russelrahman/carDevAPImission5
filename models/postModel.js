const mongoose = require("mongoose");
// create post table
const postSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      trim: true,
    },
    body: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", postSchema);
