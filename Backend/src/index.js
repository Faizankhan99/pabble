const express = require("express");
const dbConnect = require("./config/db");
const authRouter = require("./Routes/user.route");
const taskRouter = require("./Routes/task.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("hello"));
app.use("/user", authRouter);
app.use("/task", taskRouter);

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
