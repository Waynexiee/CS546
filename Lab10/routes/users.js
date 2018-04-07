const express = require("express");
const router = express.Router();
const data = require("../data/users");
const bcrypt = require("bcrypt");
const path = require("path");
router.get("/", async (req, res) => {
  if (req.cookies && req.cookies.AuthCookie) {
    res.redirect('/private');
  } else {
    res.render('static/signin', {layout: false});
  }
});

router.get("/private", async (req, res) => {
  if (req.cookies && req.cookies.AuthCookie) {
    const user = await data.findById(req.cookies.AuthCookie);
    if (user) {
      res.render("layouts/main", {username: user.username, firstName: user.firstName, lastName: user.lastName, profession: user.profession, bio: user.bio  });
    } else {
      res.status(404).json({ messages: "Cannot find you!" });
    }
  } else {
    res.status(403).render('static/failure', {layout: false});
  }
});

router.post("/login", async (req, res) => {
  const userReqData = req.body;
  const username = userReqData.username;
  const user = await data.findByUsername(username);
  if (!user) {
    res.render('static/signin', {layout: false, messages : "You don't provide a valid username / password "});
    return;
  }
  const plainTextPassword = userReqData.password;
  const isMatched = await bcrypt.compare(plainTextPassword, user.hashedPassword);
  if (isMatched) {
    res.cookie('AuthCookie', user._id , { expires: new Date(Date.now() + 900000) });
    res.redirect('/private');
  } else {
    res.render('static/signin', {layout: false, messages : "You don't provide a valid username / password "});
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("AuthCookie");
  res.render('static/signin', {layout: false, messages : "You have logged out!"});
});



module.exports = router;