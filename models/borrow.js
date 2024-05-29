const db = require("../config/db");
const { DataTypes } = require("sequelize");
const Book = require("./book");
const User = require("./user");

const Borrow = db.define("Borrow", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// 一个人 可以 借多本书
// 一本书 可以 被多个人借
Book.belongsToMany(User, { through: Borrow, foreignKey: "bookId" });
User.belongsToMany(Book, { through: Borrow, foreignKey: "userId" });

module.exports = Borrow;
