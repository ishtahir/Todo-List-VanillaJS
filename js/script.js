// working in the console to start off
const todoList = {
    todo: [],
    displayTodos: function() {
        if (this.todo.length === 0) {
            console.log('List is empty, please add an item to do');
        }
        this.todo.forEach(item => console.log(item));
    },
    addTodo: function(text) {
        this.todo.push({
            todoText: text,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(index, newValue) {
        this.todo[index].todoText = newValue;
        this.displayTodos();
    },
    deleteTodo: function(index) {
        this.todo.splice(index, 1);
        this.displayTodos();
    }
};
