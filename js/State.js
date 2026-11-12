// state.js - this file holds the current list of tasks and the filter.
// When something changes, it saves and tells the app to update the screen.

import { loadTodos, saveTodos, loadFilter, saveFilter } from "./storage.js";
import { createTodo, toggleTodo, deleteTodo, clearCompletedTodos } from "./todo-logic.js";

// This is our data
let todos = loadTodos();
let filter = loadFilter();

// This will be set by main.js - it is the function that redraws the screen
let onChange = function () {};

export function setOnChange(fn) {
  onChange = fn;
}

export function getTodos() {
  return todos;
}

export function getFilter() {
  return filter;
}

export function getVisibleTodos() {
  if (filter === "active") {
    const active = [];
    for (const todo of todos) {
      if (!todo.completed) {
        active.push(todo);
      }
    }
    return active;
  }

  if (filter === "completed") {
    const done = [];
    for (const todo of todos) {
      if (todo.completed) {
        done.push(todo);
      }
    }
    return done;
  }

  return todos;
}

export function getCounts() {
  let activeCount = 0;
  for (const todo of todos) {
    if (!todo.completed) {
      activeCount = activeCount + 1;
    }
  }
  return {
    total: todos.length,
    active: activeCount,
    completed: todos.length - activeCount,
  };
}

function update() {
  saveTodos(todos);
  saveFilter(filter);
  onChange();
}

export function addTodo(text) {
  const newTodo = createTodo(text, todos);
  if (!newTodo) {
    return false;
  }
  todos.push(newTodo);
  update();
  return true;
}

export function toggleTodoById(id) {
  todos = toggleTodo(todos, id);
  update();
}

export function deleteTodoById(id) {
  todos = deleteTodo(todos, id);
  update();
}

export function setFilter(newFilter) {
  if (newFilter === "all" || newFilter === "active" || newFilter === "completed") {
    filter = newFilter;
    update();
  }
}

export function clearCompleted() {
  todos = clearCompletedTodos(todos);
  update();
}
