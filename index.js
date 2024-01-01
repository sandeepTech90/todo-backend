const express = require("express");
const app = express();
app.use(express.json());

const todos = [
  {
    id: 1,
    name: "Go to gym",
    description: "Go to gym from 7-9 AM",
  },
];

app.get("/", (req, res) => {
  res.send(JSON.stringify(todos));
});

app.listen(3000);
