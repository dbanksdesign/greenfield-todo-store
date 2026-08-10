export class TodoStore {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    if (typeof text !== 'string' || text.trim() === '') {
      throw new Error('text must be non-empty');
    }
    const todo = { id: this.nextId++, text, completed: false };
    this.todos.push(todo);
    return todo;
  }

  completeTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) {
      throw new Error('todo not found');
    }
    todo.completed = true;
  }

  removeTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('todo not found');
    }
    this.todos.splice(index, 1);
  }

  listTodos(options = {}) {
    const includeCompleted = options.includeCompleted ?? false;
    let result = includeCompleted
      ? [...this.todos]
      : this.todos.filter(t => !t.completed);
    result.sort((a, b) => a.id - b.id);
    return result;
  }
}
