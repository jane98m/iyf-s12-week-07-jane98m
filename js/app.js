import { renderTodos } from "./render.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const listEl = document.querySelector("ul");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, listEl);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });
    input.value = "";
    saveAndRender();
  });
}

if (listEl) {
  listEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      todos.splice(Number(e.target.dataset.index), 1);
      saveAndRender();
    }
  });
}

saveAndRender();
