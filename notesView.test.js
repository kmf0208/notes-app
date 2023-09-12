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

})