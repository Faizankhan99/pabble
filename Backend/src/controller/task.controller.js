const Task = require("../Schemas/task.Schema");

// --------------------------------(Task Controller's)--------------------------------

const addTask = async (req, res) => {
  const { task, description, duration, id } = req.body;
  try {
    if (!task) return res.status(400).send("please enter the task");
    if (task.length < 10) res.status(400).send("add minimum 10 char");
    if (id) {
      const taskDetail = await Task.create({
        task,
        description,
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

const GetTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Task.findOne({ _id: id });
    res.send(course);
  } catch (e) {
    res.status(404).send(e);
  }
};

const editTask = async (req, res) => {
  const { task, description, duration, id } = req.body;
  const userID = req.params;

  try {
    if (!task) return res.status(400).send("please enter the task");
    if (task.length < 10) res.status(400).send("add minimum 10 char");
    if (description.length < 10) res.status(400).send("add minimum 10 char");
    if (userID) {
      const taskDetail = await Task.findByIdAndUpdate(
        id,
        {
          task,
          description,
          duration,
        },
        { new: true }
      );
      await taskDetail.save();
      return res.status(200).send(taskDetail);
    } else {
      return res.status(404).send("Id invalid");
    }
  } catch (error) {
    return res.status(400).send("task addition failed");
  }
};

const statusChange = async (req, res) => {
  const { _id, value } = req.body;
  const userID = req.params;

  try {
    if (userID) {
      let task = await Task.findById({ _id: _id });
      console.log("task", task);
      task.status = value;
      await task.save();
      return res.send(task);
    }
  } catch (error) {
    return res.send(error.message);
  }
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
  GetTaskById,
};
