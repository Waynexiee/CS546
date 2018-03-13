/**
 * Created by xiewangzhi on 13/03/2018.
 */
const resultRoutes = require("./result");
const path = require("path");
const constructorMethod = app => {
  app.use("/result", resultRoutes);
  app.get("/", (req, res) => {
    res.sendFile(path.resolve("static/input.html"));
  });
};

module.exports = constructorMethod;