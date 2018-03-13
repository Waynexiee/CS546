/**
 * Created by xiewangzhi on 13/03/2018.
 */
const express = require("express");
const router = express.Router();
const data = require("../data/ispalindrome");
router.post("/", async (req, res) => {
  let result = req.body;

  let text_to_test = result["text-to-test"];
  if (!text_to_test) {
    res.status(400);
    res.render('errors/error', {error: "You must provide text to check"});
  } else {
    let isPalindrome = data.checkPalindrome(text_to_test);
    res.render("layouts/main", {text_to_test: text_to_test, is_Palindrome:isPalindrome });
  }
});

module.exports = router;