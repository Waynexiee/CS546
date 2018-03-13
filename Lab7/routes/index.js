/**
 * Created by xiewangzhi on 05/03/2018.
 */
const recipesRoutes = require("./recipes");

const constructorMethod = app => {
  app.use("/recipes", recipesRoutes);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
