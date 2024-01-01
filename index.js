const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const current_id = 1;

const todos = [
  {
    id: 1,
    title: "Go to gym",
    description: "Go to gym from 7-9 AM",
  },
];

app.get("/", (req, res) => {
  res.send(JSON.stringify(todos));
});

app.post("/add", (req, res) => {
  const data = req.body;
  console.log({ data });
  todos.push({
    id: current_id + 1,
    ...data,
  });
  res.send(JSON.stringify(todos));
});

app.delete("/delete", (req, res) => {
  const data = req.body;
  const { id } = data;

  const ind = todos.findIndex((todo) => todo.id === id);
  todos.splice(ind);

  res.send(JSON.stringify(todos));
});

app.listen(3000, () => {
  console.log("listening");
});
