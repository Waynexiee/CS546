const express = require("express");
const router = express.Router();
const data = require("../data/data");

router.get("/", async (req, res) => {
  try {
    res.json(data.story);
  } catch (e) {
    res.status(404).json({ message: "Story not found" });
  }
});


module.exports = router;