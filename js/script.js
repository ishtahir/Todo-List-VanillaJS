const input = document.getElementById('todo-input');
const addBtn = document.querySelector('button');
const ul = document.querySelector('ul');

const todoList = {
    todo: [],
    displayTodos: function() {
        // let text = '';
        // todoList.todo.forEach(thing => {
        //     text += `<li><input type="checkbox">${thing}<span>X</span></li>`;
        // });
        // ul.innerHTML = text;
        if (this.todo.length === 0) {
            console.log('List is empty, please add an item to do')
        }
        console.log(this.todo)
    },
    addTodo: function(newItem) {
        this.todo.push(newItem);
        this.displayTodos();
        // if (input.value) {
        //     todoList.todo.push(input.value);
        //     todoList.displayTodos();
        //     input.value = '';
        // } else {
        //     return;
        // }
        // console.log(todoList.todo);
    }
};

addBtn.addEventListener('click', todoList.addTodo);
