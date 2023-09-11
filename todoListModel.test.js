const TodoListModel = require("./todoListModel")

describe('todoListModel', () =>{
    it('return an empty list', () => {
        const model = new TodoListModel();

        expect(model.getItems()).toEqual([])
    })
    it('return a list of items', () => {
        const model = new TodoListModel();
        
        model.addItem('Cancel subscription to the gym')
        expect(model.getItems()).toEqual(['Cancel subscription to the gym'])

    })
    it('return a list of items', () => {
        const model = new TodoListModel();
        
        model.addItem('Cancel subscription to the gym')
        model.addItem('buy bread')
        expect(model.getItems()).toEqual(['Cancel subscription to the gym', 'buy bread'])

    })
    it('return a list of items', () => {
        const model = new TodoListModel();
        
        model.addItem('Cancel subscription to the gym')
        model.addItem('buy bread')
        model.clear()
        expect(model.getItems()).toEqual([])

    })
})


