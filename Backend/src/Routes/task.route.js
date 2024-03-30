const express = require("express");
const router = express.Router();

// --------------------------------(All Task Routes's)--------------------------------

const taskController = require("../controller/task.controller");
router.post("/addTask", taskController.addTask);
router.get("/getAllTasks", taskController.getAllTasks);
router.patch("/edit/:id", taskController.statusChange);
router.delete("/deleteTask/:id", taskController.deleteTask);
router.get("/task/:id", taskController.GetTaskById);
router.put("/editTask/:id", taskController.editTask);

module.exports = router;
