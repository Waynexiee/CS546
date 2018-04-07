const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const cookieParser = require('cookie-parser')
const handlebarsInstance = exphbs.create({
  defaultLayout: "main",
  // Specify helpers which are only registered on this instance.
  helpers: {
    asJSON: (obj, spacing) => {
      if (typeof spacing === "number")
        return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
      return new Handlebars.SafeString(JSON.stringify(obj));
    }
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", handlebarsInstance.engine);
app.set("view engine", "handlebars");
app.use(cookieParser());
configRoutes(app);

app.listen(3000, function() {
  console.log(
    "Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it"
  );
  process.send = process.send || function () {};
  process.send({done: true});
});