const db = require("../config/db");
const { DataTypes } = require("sequelize");
const Category = require("./category");

const Book = db.define("Book", {
  bookId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  cid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
  },
});

// 关系问题
// 一本图书属于一个分类
// 分类下有多个图书
Book.belongsTo(Category, { foreignKey: "cid" });
Category.hasMany(Book, { foreignKey: "cid" });

module.exports = Book;
