const TodoListModel = require('./todoListModel')

const model = new TodoListModel();


model.addItem('hello')
model.clear()
console.log(model.getItems());