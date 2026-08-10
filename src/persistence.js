import { readFile, writeFile } from 'node:fs/promises';
import { TodoStore } from './store.js';

export async function saveToFile(filePath, store) {
  const data = JSON.stringify(store.listTodos({ includeCompleted: true }), null, 2);
  await writeFile(filePath, data, 'utf-8');
}

export async function loadFromFile(filePath) {
  const raw = await readFile(filePath, 'utf-8');
  const todos = JSON.parse(raw);
  const store = new TodoStore();
  for (const todo of todos) {
    store.todos.push(todo);
    store.nextId = Math.max(store.nextId, todo.id + 1);
  }
  return store;
}
