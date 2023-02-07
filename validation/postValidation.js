// import validator
const { check, validationResult } = require("express-validator");
// import post model
const Post = require("../models/postModel");

// validation rules
exports.postValidationRules = [
  check("title")
    .notEmpty()
    .withMessage("Title is required")
    .trim(),
  check("body")
    .notEmpty()
    .withMessage("Body is required")
    .trim(),
];

// validation message
exports.postValidationMsg = (req, res, next) => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result[0].msg;
  res.json({
    success: false,
    code: 400,
    message: error,
  });
};
