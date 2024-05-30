const Borrow = require("../../models/borrow");
const User = require("../../models/user");
const Book = require("../../models/book");

const BorrowAdminService = {
  async findAll() {
    return await Borrow.findAll({
      include: [
        { model: User, attributes: ["username"] },
        { model: Book, attributes: ["name", "author"] },
      ],
    });
  },
  async update(id) {
    return await Borrow.update({ status: 1 }, { where: { id } });
  },
  async delete(id) {
    return await Borrow.destroy({ where: { id } });
  },
};
module.exports = BorrowAdminService;
