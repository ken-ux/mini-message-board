var express = require("express");
var router = express.Router();
var messages = require("../messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
