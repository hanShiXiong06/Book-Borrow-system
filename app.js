const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// 引入数据库对象
const db = require("./config/db");
const User = require("./models/user");
const Category = require("./models/Category");
const Book = require("./models/book");
const Borrow = require("./models/borrow");

// 同步数据库
db.sync().then((err) => {
  if (err) return;
  console.log("同步成功");
});

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//  设置静态资源的
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
