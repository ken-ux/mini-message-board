var express = require("express");
var router = express.Router();
var messages = require("../messages");

/* GET form for new messages. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const data = req.body;
  const messageUser = data.name;
  const messageText = data.message;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = router;
