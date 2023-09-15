

class NotesView {
    constructor(model, notesClient){
        this.model = model
        this.notesClient = notesClient
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#show-message-button').addEventListener('click', () => {
            const newNote = document.querySelector('#username-input').value;
            document.querySelector('#username-input').value='';
            this.notesClient.createNote(newNote).then((error) => {
                if(error){
                    this.displayError()
                }
                else{
                    this.addNewNote(newNote)
                    this.displayNotes()
                }
            })
            
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

    displayError(){
        const newEl = document.createElement('div')
        const errorMessage = 'Hello there, This is an Error message'
        newEl.textContent = errorMessage
        this.mainContainerEl.append(newEl);
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