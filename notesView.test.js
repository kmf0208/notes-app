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
      
        // 1. Fill the input
        const input = document.querySelector('#username-input');
        input.value = 'My new amazing test note';
      
        // 2. Click the button
        const button = document.querySelector('#show-message-button');
        button.click();
      
        // 3. The note should be on the page
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