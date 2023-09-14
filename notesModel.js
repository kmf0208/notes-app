class NotesModel {
  constructor(list) {
    this.list = [];
  }
  getNotes() {
    return this.list;
  }
  addNote(item) {
    this.list.push(item);
  }
  reset(){
    this.list = []
  }
  setNotes(note){
    this.list = note
  }
}

module.exports = NotesModel;
