const express = require("express");
const router = express.Router();

const taskController = require("../controller/user.controller");

router.post("/signup", taskController.Signup);
router.post("/login", taskController.Login);

module.exports = router;
