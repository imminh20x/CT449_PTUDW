const express = require("express");
const cors = require("cors");
const setupContactRouter = require("./app/routes/contact.routes");
const app = express();

app.use(cors());

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-url
app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to contact book application.",
  });
});

//sign in router to server
setupContactRouter(app);

module.exports = app;
