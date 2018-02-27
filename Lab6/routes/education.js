/**
 * Created by xiewangzhi on 26/02/2018.
 */
const express = require("express");
const router = express.Router();
const data = require("../data/data");

router.get("/", async (req, res) => {
  try {
    res.json(data.education);
  } catch (e) {
    res.status(404).json({ message: "Education not found" });
  }
});


module.exports = router;