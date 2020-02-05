const express = require("express");
const router = require("./router.js");

const app = express();

app.use(express.json());

app.use("/api/cars", router);
app.get("/", (req, res) => {
  console.log("Heyy");
  res.status(200).json({ message: "Linked up" });
});

app.listen(4000, () => console.log("Listening on port 4000"));
