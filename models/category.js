const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Category = db.define("Category", {
  cid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(10), unique: true },
  sort: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Category;
