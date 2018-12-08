const ul = document.querySelector('.todo-list-items');
const li = document.querySelector('li');
const span = document.querySelector('span');

ul.addEventListener('click', function(event) {
    // clear todos when they are clicked
    if (event.target.nodeName === 'LI') {
        event.toElement.classList.toggle('clear');
    }

    // delete todos when trash icon is clicked
    if (event.target.nodeName === 'SPAN') {
        event.target.parentNode.remove();
    }

    if (event.target.nodeName === 'I') {
        event.target.parentNode.parentNode.remove();
    }
});

const input = document.querySelector('input[type="text"]');
input.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && input.value) {
        const value = this.value;
        let text = document.createElement('li');
        text.innerHTML = `<span><i class="fa fa-trash"></i></span>${value}`;
        ul.appendChild(text);
        this.value = '';
    }
});

// toggle fade for input when icon is pressed
const minus = document.querySelector('.fa-minus');
minus.addEventListener('click', function() {
    if (input.style.display === 'none') {
        // input.style.animation = 'fadein 2s';
        input.style.display = 'inline-block';
    } else {
        // input.style.animation = 'fadeout 2s';
        input.style.display = 'none';
        // input.onanimationend = function() {
        // }
    }
})
