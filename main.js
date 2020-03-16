const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");
const todoDiv = document.querySelector(".todo-item");

addBtn.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    let newDiv = document.createElement("div");
    newDiv = todoDiv.cloneNode(true);
    newDiv.firstElementChild.textContent = input.value;
    todoList.appendChild(newDiv);
    input.value = ''
}