const BorrowService = require("../../services/api/BorrowService");
const { secret } = require("../../config/config");
const jwt = require("jsonwebtoken");
const BorrowController = {
  async create(req, res) {
    const { id } = req.params;
    const token = req.headers.authorization;
    const user = jwt.verify(token, secret);
    await BorrowService.create({ id: parseInt(id), userId: +user.userId });
    res.send(id);
  },
};
module.exports = BorrowController;
