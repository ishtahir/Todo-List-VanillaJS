// working in the console to start off
const todoList = {
    todo: [],
    displayTodos: function() {
        if (this.todo.length === 0) {
            console.log('List is empty, please add an item to do')
        }
        console.log(this.todo)
    },
    addTodo: function(newItem) {
        this.todo.push(newItem);
        this.displayTodos();
    }
};
