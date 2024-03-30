import axios from "axios";

export const URL = `http://localhost:8080`;

// ----------------------------------(ADD TASK Function)-----------------------------------------------------------------

export const AddTask = async (data, id) => {
  const { task, description, duration } = data;
  try {
    const Response = await axios.post(`${URL}/task/addTask`, {
      task: task,
      description: description,
      duration: duration,
      id: id,
    });
    return Response.data;
  } catch (err) {
    console.log(err);
  }
};

// ----------------------------------(GET ALL TASK Function)-----------------------------------------------------------------

export const GetTask = async (id) => {
  try {
    const Response = await axios.get(`${URL}/task/getAllTasks?id=${id}`, {
      method: "GET",
    });
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------(GET TASK BY ID Function)-----------------------------------------------------------------

export const GetTaskById = async (taskId) => {
  try {
    const Response = await axios.get(`${URL}/task/task/${taskId}`, {
      method: "GET",
    });
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------(EDIT TASK  STATUS Function)-----------------------------------------------------------------

export const EditStatus = async (data, value) => {
  const { userId, _id } = data;

  try {
    const Response = await axios.patch(`${URL}/task/edit/${userId}`, {
      _id,
      value,
    });
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------(DELETE TASK Function)-----------------------------------------------------------------

export const DeleteTask = async (data) => {
  const { _id } = data;
  try {
    const Response = await axios.delete(`${URL}/task/deleteTask/${_id}`);
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------(EDIT TASK Function)-----------------------------------------------------------------

export const EditTaskData = async (data, user) => {
  const { task, description, duration } = data;
  const { userId, _id } = user;

  try {
    const Response = await axios.put(`${URL}/task/editTask/${userId}`, {
      task: task,
      description: description,
      duration: duration,
      id: _id,
    });
    return Response.data;
  } catch (err) {
    console.log(err);
  }
};
