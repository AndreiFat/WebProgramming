const express = require("express");
const router = express.Router();
const passport = require("passport");

User = require("./schemas/schema.js/");

router.get("/", function (req, res) {
  res.render("register");
});

// Handling user signup
router.post("/", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  User.register(
    new User({ username: username }),
    password,
    function (err, user) {
      if (err) {
        console.log(err);
        return res.render("register");
      }

      passport.authenticate("login")(req, res, function () {
        res.render("secret");
      });
    }
  );
});
