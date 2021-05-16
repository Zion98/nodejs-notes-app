
const notes = require('./notes')


// console.log(process.argv[2])
//argument vector
const yargs = require("yargs");
const command = process.argv[2];
// console.log(process.argv)

yargs.version("4.0.0");

// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body)
    // console.log("Adding a new note", argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "To remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    notes.removeNotes(argv.title)
  },
});

yargs.command({
  command: "list",
  describe: "To list Notes",
  handler: function (argv) {
    notes.listNotes()
    console.log("Listing Notes");
  },
});

yargs.command({
  command: "read",
  describe: "To read Notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    }
  },
  handler: function (argv) {
    notes.readNotes(argv.title) 
  },
});

yargs.parse();

// console.log(yargs.argv);
// if (command === "add") {
//     console.log("Add is true")
// }
// else{
//     console.log("Forget it")
// }

// CHALK
// const chalk = require("chalk")
// console.log(chalk.bold.underline.red.inverse("Error!"))

//VALIDATOR
// const validator= require('validator')
// console.log(validator.isEmail("deyemi@gmail.com"))
// console.log(validator.isURL("https://github.com/npm/cli/compare/v6.14.11...v7.13.0"))

//FILES SYSTEM
// const fs= require('fs')
// const utils= require('./utils')
// const notes= require("./notes")
// console.log("Clever eziogor")
// console.log(utils(5,5))
// console.log(notes())

//fs module
// fs.writeFileSync("notes.txt","This file was written in Nodejs.");
// fs.appendFileSync("notes.txt"," This is an appended text.");
