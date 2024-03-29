const express = require("express");
const router = express.Router();

const taskController = require("../controller/task.controller");

router.post("/addTask", taskController.addTask);
router.get("/getAllTasks", taskController.getAllTasks);
router.route("/edit/:id").put(taskController.editTask);

router
  .route(":id")
  .put(taskController.statusChange)
  .delete(taskController.deleteTask);

module.exports = router;
