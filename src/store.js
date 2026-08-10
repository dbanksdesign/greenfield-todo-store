export class TodoStore {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    throw new Error('not implemented');
  }

  completeTodo(id) {
    throw new Error('not implemented');
  }

  removeTodo(id) {
    throw new Error('not implemented');
  }

  listTodos(options = {}) {
    throw new Error('not implemented');
  }
}
