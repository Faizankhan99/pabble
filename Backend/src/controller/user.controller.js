const User = require("../Schemas/user.Schema");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status: false, message: "Email Already Exist!" });
    } else {
      const user = await User.create({
        name: name,
        email: email,
        // password protect ------
        password: CryptoJS.AES.encrypt(password, "%$#@!").toString(),
        role: role,
      });
      return res.send({ status: true, message: "Sign up Successfully!" });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      //decrypt password using cryptoJS -----------------
      const decryptPass = CryptoJS.AES.decrypt(user.password, "%$#@!");
      const loginPassword = decryptPass.toString(CryptoJS.enc.Utf8);

      if (password === loginPassword) {
        // --- jwt ------
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
            name: user.name,
          },
          "%$#@!",
          { expiresIn: "30 days" }
        );

        return res.send({
          token: token,
          status: true,
          message: "Log in Successfully!",
        });
      } else {
        return res.send({
          token: null,
          status: false,
          message: "Wrong Password!!",
        });
      }
    } else {
      return res.send({
        token: null,
        status: false,
        message: "Wrong Credential!!",
      });
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = { Signup, Login };
