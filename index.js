const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
const view = new NotesView(model);



model.addNote('this is an example note');
view.displayNotes();


