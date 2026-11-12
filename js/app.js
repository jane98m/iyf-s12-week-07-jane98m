import { addTodo, deleteTodo, toggleTodo } from "./todo-logic.js";
import { renderTodos } from "./render.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const listEl = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, listEl);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    todos = addTodo(todos, input.value);
    input.value = "";
    saveAndRender();
  });
}

if (listEl) {
  listEl.addEventListener("click", (e) => {
    const delBtn = e.target.closest(".delete-btn");
    if (delBtn) {
      todos = deleteTodo(todos, Number(delBtn.dataset.id));
      saveAndRender();
      return;
    }
    const li = e.target.closest("li");
    if (li) {
      todos = toggleTodo(todos, Number(li.dataset.id));
      saveAndRender();
    }
  });
}

saveAndRender();
