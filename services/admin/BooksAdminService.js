const Book = require("../../models/book");

const BooksAdminService = {
  // C
  create(params) {
    // cid ,name , author
    Book.create(params);
  },
  //   // R
  async findAll({ limit, offset }) {
    return await Book.findAndCountAll({
      // 10 , 1
      offset,
      limit,
    });
  },
  //   // U
  async update({ id, name, author }) {
    return await Book.update({ name, author }, { where: { bookid: id } });
  },
  //   // D
  async delete(id) {
    return await Book.destroy({ where: { bookid: id } });
  },
};

module.exports = BooksAdminService;
