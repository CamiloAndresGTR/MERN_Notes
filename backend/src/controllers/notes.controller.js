const notesController = {};

const Note = require("../models/Note");

notesController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesController.getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesController.createNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    author: author,
    date: date
  });
  await newNote.save();

  res.json(newNote);
};

notesController.updateNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      content,
      author,
      date
    }
  );

  res.json({ message: "Notes Updated" });
};

notesController.deleteNote = async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id });

  res.json({ message: "Note deleted" });
};

module.exports = notesController;
