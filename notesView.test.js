/**
 * @jest-environment jsdom
 */

const fs = require('fs');





const NotesModel = require("./notesModel")
const NotesView = require("./notesView")



describe('NotesView class' ,() => {
    it('displays two notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('this is first note')
        model.addNote('this is second note')

        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2)
    })
    it('adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      
        const model = new NotesModel();
        const view = new NotesView(model);
      
        const input = document.querySelector('#username-input');
        input.value = 'My new amazing test note';
      
        const button = document.querySelector('#show-message-button');
        button.click();
      
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
      });
      it('clear the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('one');
        model.addNote('two');
      
        view.displayNotes();
        view.displayNotes();
      
        expect(document.querySelectorAll('div.note').length).toEqual(2);
      });
})

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
});
  class MockNotesClient {
    loadNotes(callback) {
      const mockNotes = ['Note 1'];
      callback(mockNotes);
    }
  }
  it('should fetch and display notes from the API', () => {
    const mockModel = {
      getNotes: jest.fn(() => []),
      addNote: jest.fn(),
      setNotes: jest.fn(),
    };
        const notesView = new NotesView(mockModel, new MockNotesClient());
        notesView.displayNotesFromApi();
    expect(mockModel.setNotes).toHaveBeenCalledWith(['Note 1']);
  });
});