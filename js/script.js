// working in the console to start off
const todoList = {
    todo: [],
    displayTodos: function() {
        if (this.todo.length === 0) {
            console.log('List is empty, please add an item to do');
        }
        this.todo.forEach(item => {
            item.completed ? console.log(`(X) ${item.todoText}`) : console.log(`( ) ${item.todoText}`);
        });
    },
    addTodo: function(text) {
        this.todo.push({
            todoText: text,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(index, newText) {
        this.todo[index].todoText = newText;
        this.displayTodos();
    },
    deleteTodo: function(index) {
        this.todo.splice(index, 1);
        this.displayTodos();
    },
    toggleCompleted: function(index) {
        const todo = this.todo[index];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() {
        let completed = 0;
        this.todo.forEach(item => {
            if (item.completed) {
                completed++;
            };
        });
        // if everything is true, make everything false
        if (completed === this.todo.length) {
            this.todo.forEach(item => item.completed = false)
        } else {
            // make everything true
            this.todo.forEach(item => {
                if (item.completed === false) {
                    item.completed = true;
                }
            })
        }
        this.displayTodos();
    }
};
