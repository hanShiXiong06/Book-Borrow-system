const Borrow = require("../../models/borrow");
const BorrowService = {
  async create({ id, userId }) {
    return await Borrow.create({ bookId: id, userId });
  },
};
module.exports = BorrowService;
