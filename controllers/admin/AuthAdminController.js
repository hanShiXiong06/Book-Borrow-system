const AuthAdminService = require("../../services/admin/AuthAdminService");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../../config/config");
const AuthAdminController = {
  // C
  // 注册
  register: async function (req, res) {
    // res.json(req.body);
    if (!req.body.username && !req.body.password) {
      res.json({
        code: -1,
        msg: "请输入用户名和密码",
      });
    }
    const result = await AuthAdminService.create(req.body);
    res.json(result);
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    // 验证用户名和密码
    // const confirmUsername = "admin";
    // const confirmPassword = "123456";
    const user = await AuthAdminService.query(username);
    console.log(user.password, user.username, user.role);
    //  对用户身份进行校验
    if (user && !(user.role == "admin")) {
      res.json({ code: -1, msg: "没有权限" });
    }
    if (user && !(user.password === password)) {
      res.json({ code: -1, msg: "密码错误" });
    }
    const token = jwt.sign({ username, id: user.userId }, secret, {
      expiresIn,
    });
    // console.log(token);
    res.json({ code: 1, msg: "登录成功", token });
  },
};
module.exports = AuthAdminController;
