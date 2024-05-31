const UserService = require("../../services/api/UserService");
const { secret, expiresIn } = require("../../config/config");
const jwt = require("jsonwebtoken");

const UserController = {
  async login(req, res) {
    const { username, password } = req.body;
    if (!username && !password) {
      res.json({ code: -1, msg: "请输入完整的信息" });
    }
    const row = await UserService.findOne(username);
    // tom == tom1;
    if (!(password == row.password)) {
      res.json({
        code: -1,
        msg: "密码错误",
      });
    }
    // token
    const userinfo = { userId: row.userId, username, role: row.role };
    const token = jwt.sign(userinfo, secret, { expiresIn });

    res.json({ code: 1, token });
  },
  async register(req, res) {
    const { username, password } = req.body;
    if (!username && !password) {
      res.json({ code: -1, msg: "请输入完整的信息" });
    }
    const result = await UserService.create(req.body);
    if (!result) {
      res.json({ code: -1, msg: "注册失败" });
    }
    res.json({ code: 1, msg: "注册成功" });
  },
};
module.exports = UserController;
