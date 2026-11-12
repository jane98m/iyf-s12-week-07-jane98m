export function addTodo(todos, text) {
  if (!text || !text.trim()) return todos;
  return [...todos, { id: Date.now(), text: text.trim(), completed: false }];
}

export function deleteTodo(todos, id) {
  return todos.filter((t) => t.id !== id);
}

export function toggleTodo(todos, id) {
  return todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
}
