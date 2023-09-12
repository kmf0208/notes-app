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
}

module.exports = NotesModel;
