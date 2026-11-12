// storage.js - this file saves and loads tasks from localStorage.
// If the saved data is broken, it just returns empty so the app does not crash.

const TODOS_KEY = "todos";
const FILTER_KEY = "todo-filter";

export function loadTodos() {
  const saved = localStorage.getItem(TODOS_KEY);
  if (!saved) {
    return [];
  }

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [];
    }

    // Only keep tasks that look correct
    const goodTodos = [];
    for (const todo of parsed) {
      if (
        todo &&
        typeof todo.id === "number" &&
        typeof todo.text === "string" &&
        typeof todo.completed === "boolean"
      ) {
        goodTodos.push(todo);
      }
    }
    return goodTodos;
  } catch (error) {
    // Saved data was broken, start fresh
    return [];
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  } catch (error) {
    // If storage is full or blocked, just keep working in memory
    console.log("Could not save todos");
  }
}

export function loadFilter() {
  const saved = localStorage.getItem(FILTER_KEY);
  if (saved === "active" || saved === "completed" || saved === "all") {
    return saved;
  }
  return "all";
}

export function saveFilter(filter) {
  try {
    localStorage.setItem(FILTER_KEY, filter);
  } catch (error) {
    console.log("Could not save filter");
  }
}
