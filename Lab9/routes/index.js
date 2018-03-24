/**
 * Created by xiewangzhi on 13/03/2018.
 */
const constructorMethod = app => {
  app.get("/", (req, res) => {
    res.render("palindrome/static", {});
  });
};

module.exports = constructorMethod;