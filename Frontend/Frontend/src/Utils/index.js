import axios from "axios";

export const AddTask = async (data, id) => {
  const { task, storyPoint, duration } = data;
  console.log("data, id", data, id);

  try {
    const Response = await axios.post("http://localhost:8080/task/addTask", {
      task: task,
      storyPoint: storyPoint,
      duration: duration,
      id: id,
    });
    return Response.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetTask = async (id) => {
  console.log("userData1", id);
  try {
    const Response = await axios.get(
      `http://localhost:8080/task/getAllTasks?id=${id}`
    );
    return Response.data;
  } catch (error) {
    console.log(error);
  }
};
