// to-do-list.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.js-name-input');
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});

function addTodo() {
    const input = document.querySelector('.js-name-input');
    const todoText = input.value.trim();
    if (todoText === '') {
        return;
    }

    const todoList = document.querySelector('.todo-list');

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const span = document.createElement('span');
    span.textContent = todoText;
    span.onclick = () => {
        todoItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '&times;';
    deleteButton.onclick = () => {
        todoList.removeChild(todoItem);
    };

    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    input.value = '';
}
