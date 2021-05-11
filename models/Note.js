const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
  },
  details: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Note = new mongoose.model("Note", NoteSchema);

module.exports = Note;
