class TodoService {
    static lastId: number = 0;

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo): void {
        var newId = TodoService.getNextId();
    }

    getAll(): Todo[] {
        return this.todos;
    }

    static getNextId(): number {
        return TodoService.lastId += 1;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}