const express = require('express');
const router = express.Router();

// import controller
const postController = require('../controllers/postController');
// import validator
const {postValidationRules,postValidationMsg} = require("../validation/postValidation");

// get all post
router.get('/', postController.getAllPosts);
// create new post
router.post('/create', postValidationRules, postValidationMsg, postController.createNewPost);
// update post
router.put('/update/:id', postController.postUpdate);
// delete post
router.delete('/delete/:id', postController.postDelete);

module.exports = router;