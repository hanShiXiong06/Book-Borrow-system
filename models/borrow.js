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
    references: {
      model: Book,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  status: {
    // 借阅信息的状态
    // 0 被借阅
    // 1 续借
    // 2 归还
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

// 一个人 可以 借多本书
// 一本书 可以 被多个人借
Book.belongsToMany(User, { through: Borrow, foreignKey: "bookId" });
User.belongsToMany(Book, { through: Borrow, foreignKey: "userId" });

Borrow.belongsTo(User, { foreignKey: "userId" });
Borrow.belongsTo(Book, { foreignKey: "bookId" });

User.hasMany(Borrow, { foreignKey: "userId" });
Book.hasMany(Borrow, { foreignKey: "bookId" });

module.exports = Borrow;
