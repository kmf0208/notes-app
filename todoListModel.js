class TodoListModel {
  constructor(list) {
    this.list = [];
  }
  getItems() {
    return this.list;
  }
  addItem(item) {
    this.list.push(item);
  }
  clear(){
    this.list = []
  }
}

module.exports = TodoListModel;
