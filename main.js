const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const todoDiv = document.querySelector(".todo-item");
const colorBtn = document.querySelector(".color-btn");
const todoRemove = document.querySelectorAll(".todo-remove");

addBtn.addEventListener('click', addTodo);
colorBtn.addEventListener('click', toggleColor);
todoRemove.forEach(element => {
    element.addEventListener('click', removeTodoItem);
})


function addTodo(event) {
    event.preventDefault();
    let newDiv = document.createElement("div");
    newDiv = todoDiv.cloneNode(true);
    newDiv.firstElementChild.textContent = input.value;
    todoList.appendChild(newDiv);
    input.value = ''
}

function toggleColor(event) {
    event.preventDefault();
    if (todoList.style.backgroundColor === 'white') {
        todoList.style.backgroundColor = 'grey';
    } else {
        todoList.style.backgroundColor = 'white';
    }
}

function removeTodoItem (event) {
    event.preventDefault();
    const thisDiv = this.parentElement
    thisDiv.remove();
}