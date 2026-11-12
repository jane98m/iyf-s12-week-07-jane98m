export function renderTodos(todos, listEl) {
  listEl.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add("completed");
    const span = document.createElement("span");
    span.textContent = todo.text;
    li.appendChild(span);
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.dataset.id = todo.id;
    del.className = "delete-btn";
    li.appendChild(del);
    listEl.appendChild(li);
  });
}
