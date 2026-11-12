export function renderTodos(todos, listEl) {
  listEl.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text || todo.title || todo;
    if (todo.done || todo.completed) li.classList.add("done");
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.dataset.index = index;
    del.className = "delete-btn";
    li.appendChild(del);
    listEl.appendChild(li);
  });
}
