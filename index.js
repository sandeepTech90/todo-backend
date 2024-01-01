const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

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

app.listen(3000, () => {
  console.log("listening");
});
