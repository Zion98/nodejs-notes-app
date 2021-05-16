const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => {
    return note.title == title;
  });

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("New Note added"));
  } else {
    console.log(chalk.red("Note title already taken"));
  }
};

const readNotes = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => {
    return note.title == title;
  });

  if (findNote) {
    console.log(chalk.green(JSON.stringify(findNote.body)));
  } else {
    console.log(chalk.red("No Note with the requested title exists"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your Notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const findNotes = notes.filter((notes) => {
    return notes.title != title;
  });

  saveNotes(findNotes);
  if (notes.length !== findNotes.length) {
    console.log(chalk.green.inverse("Note removed", title));
  } else {
    console.log(chalk.red.inverse("No Note was found", title));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
