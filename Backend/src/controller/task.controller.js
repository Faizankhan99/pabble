const Task = require("../Schemas/task.Schema");

const addTask = async (req, res) => {
  const { task, storyPoint, duration, id } = req.body;
  console.log("body", req.body);
  try {
    if (!task) return res.status(400).send("please enter the task");
    if (task.length < 10) res.status(400).send("add minimum 10 char");
    if (id) {
      const taskDetail = await Task.create({
        task,
        storyPoint,
        duration,
        userId: id,
      });
      await taskDetail.save();
      return res.status(200).send(taskDetail);
    } else {
      return res.status(404).send("Id invalid");
    }
  } catch (error) {
    return res.status(400).send("task addition failed");
  }
};

const getAllTasks = async (req, res) => {
  const { id } = req.query;
  try {
    let tasklist = await Task.find({ userId: id });
    return res.status(200).send(tasklist);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const editTask = async (req, res) => {};

const statusChange = async (req, res) => {
  const { id, string } = req.body;

  try {
    let task = await Task.findById({ _id: id });
    if (string === "right") {
      if (task.status === "backlog") {
        task.status = "todo";
        task.save();
        return res.send(task);
      } else if (task.status === "todo") {
        task.status = "doing";
        task.save();
        return res.send(task);
      } else if (task.status === "doing") {
        task.status = "done";
        task.save();
        return res.send(task);
      }
    } else {
      if (task.status === "done") {
        task.status = "doing";
        task.save();
        return res.send(task);
      } else if (task.status === "doing") {
        task.status = "todo";
        task.save();
        return res.send(task);
      } else if (task.status === "todo") {
        task.status = "backlog";
        task.save();
        return res.send(task);
      }
    }
  } catch (error) {}
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    let response = await Task.findByIdAndDelete(id);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send("deleteFailed");
  }
};

module.exports = {
  addTask,
  getAllTasks,
  editTask,
  statusChange,
  deleteTask,
};