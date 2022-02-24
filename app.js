const express = require("express");
const cors = require("cors");
const { BadRequestError, errorHandler } = require("./app/errors");

const app = express();
const setupContactRoutes = require("./app/routes/contact.routes");

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
setupContactRoutes(app);

// handle 404 response
app.use((req, res, next) => {
  // Code ở đây sẽ chạy khi không có route được định nghĩa nào
  // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  next(new BadRequestError(404, "Resource not found"));
  });
  // define error-handling middleware last, after other app.use() and routes calls
  app.use((err, req, res, next) => {
  // Middleware xử lý lỗi tập trung.
  // Trong các đoạn code xử lý ở các route, gọi next(error)
  // sẽ chuyển về middleware xử lý lỗi này
  errorHandler.handleError(error, res);
  });

module.exports = app;
