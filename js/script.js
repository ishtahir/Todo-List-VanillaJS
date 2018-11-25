const todoInput = document.getElementById('todo-input');
const ul = document.createElement('ul');
ul.classList.add('notes');

// use enter button for click
todoInput.addEventListener("keyup", event => {
    event.preventDefault();
    if (event.keyCode === 13 && todoInput.value) {
        document.querySelector('.add-btn').click();
    }
});

// working in the console to start off
const todoList = {
    todo: [],
    displayTodos: function() {
        let lists = '';
        if (this.todo.length === 0) {
            lists = '<li>List is empty, please add an item to do</li>'
        }
        this.todo.map(item => {
            lists += item.completed ? `<li class="note"><input type="checkbox" checked><label>${item.todoText}</label></li>` : `<li class="note"><input type="checkbox"><label>${item.todoText}</label></li>`;
        });
        ul.innerHTML = lists;
        document.body.appendChild(ul);
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

const handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        if (todoInput.value) {
            todoList.addTodo(todoInput.value);
            todoInput.value = '';
        }
    },
    changeTodo: function() {
        const indexInput = document.querySelector('.index-input');
        const contentInput = document.querySelector('.content-input');
        if (indexInput.value && contentInput.value) {
            todoList.changeTodo(indexInput.valueAsNumber, contentInput.value);
        }
        indexInput.value = '';
        contentInput.value = '';
    },
    deleteTodo: function() {
        const deleteIndex = document.querySelector('.delete-index');
        if (deleteIndex.value && todoList.todo[deleteIndex.value]) {
            todoList.deleteTodo(deleteIndex.valueAsNumber);
        }
        deleteIndex.value = '';
    }
}
