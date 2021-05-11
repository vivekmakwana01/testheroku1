const express = require("express");
require("./conn");
const Note = require("./models//Note");
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
