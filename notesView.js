

class NotesView {
    constructor(model, notesClient){
        this.model = model
        this.notesClient = notesClient
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#show-message-button').addEventListener('click', () => {
            const newNote = document.querySelector('#username-input').value;
            this.notesClient.createNote(newNote)
            this.addNewNote(newNote)
            document.querySelector('#username-input').value='';
         });
    }
    displayNotes(){
        document.querySelectorAll('.note').forEach((element) => {
            element.remove()
        })

        const notes = this.model.getNotes();
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        });

    }
    addNewNote(newNote){
        this.model.addNote(newNote);
        this.displayNotes();
    }
   
    displayNotesFromApi(){
        this.notesClient.loadNotes((notes) => {
            this.model.setNotes(notes);
            this.displayNotes();
          });
    }
}

module.exports = NotesView