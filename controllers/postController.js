// import uuid for generate user id
const { v4: uuidv4 } = require("uuid");
// import Model
const Post = require("../models/postModel");

// get all post
exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({ status: "1" });
    // return response
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// create post
exports.createNewPost = async (req, res) => {
  try {
    // console.log("Create post");
    // get form data
    const newPost = new Post({
      id: uuidv4(),
      title: req.body.title,
      body: req.body.body,
    });
    // store data into database
    await newPost.save();
    // return response
    res.status(201).json({
      message: "Post created Successfully",
      data: newPost,
    });
  } catch (error) {
    console.log(error);
    // return error message
    res.status(400).send(error.message);
  }
};
// update post
exports.postUpdate = async (req, res) => {
  try {
    // get post for update
    const updatePost = await Post.findOne({ id: req.params.id });
    // check post exist or not
    if (!updatePost) {
      return res.status(400).json({
        message: "Category is not found !!",
      });
    }
    // update post
    updatePost.title = req.body.title;
    updatePost.body = req.body.body;
    await updatePost.save();
    // return response
    res.status(200).json({
      message: "Post update successfully",
      data: updatePost,
    });
  } catch (error) {
    // console.log(error);
    // return error message
    res.status(400).send(error.message);
  }
};
// delete post
exports.postDelete = async (req, res) => {
  try {
    const deletePost = await Post.findOne({ id: req.params.id });
    // check post exist or not
    if (!deletePost) {
      return res.status(400).json({
        message: "Post is not found !!",
      });
    }
    // delete post
    deletePost.deleteOne();
    res.status(200).json({ message: "Post is deleted" });
  } catch (error) {
    // return error message
    res.status(400).send(error.message);
  }
};
