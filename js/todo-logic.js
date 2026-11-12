// Pure functions only - no DOM, no localStorage.
// Every function returns a NEW array, it never changes the original.

export function addTodo(todos, text) {
  const trimmed = text.trim();
  if (!trimmed) return todos;
  const newTodo = {
    id: Date.now(),
    text: trimmed,
    completed: false,
  };
  return [...todos, newTodo];
}

export function deleteTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

export function toggleTodo(todos, id) {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

export function clearCompleted(todos) {
  return todos.filter((todo) => !todo.completed);
}

export function filterTodos(todos, filter) {
  if (filter === "active") return todos.filter((todo) => !todo.completed);
  if (filter === "completed") return todos.filter((todo) => todo.completed);
  return todos;
}

export function countActive(todos) {
  return todos.filter((todo) => !todo.completed).length;
}
