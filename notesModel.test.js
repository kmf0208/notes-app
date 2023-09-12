const NotesModel = require("./notesModel")

describe('todoListModel', () =>{
    it('return an empty list', () => {
        const model = new NotesModel();

        expect(model.getNotes()).toEqual([])
    })
    it('return a list of items', () => {
        const model = new NotesModel();
        
        model.addNote('Cancel subscription to the gym')
        expect(model.getNotes()).toEqual(['Cancel subscription to the gym'])

    })
    it('return a list of items', () => {
        const model = new NotesModel();
        
        model.addNote('Cancel subscription to the gym')
        model.addNote('buy bread')
        expect(model.getNotes()).toEqual(['Cancel subscription to the gym', 'buy bread'])

    })
    it('return a list of items', () => {
        const model = new NotesModel();
        
        model.addNote('Cancel subscription to the gym')
        model.addNote('buy bread')
        model.reset()
        expect(model.getNotes()).toEqual([])

    })
})


