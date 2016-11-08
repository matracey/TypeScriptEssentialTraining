interface IIdGenerator {
    nextId: number;
}

class TodoService implements ITodoService, IIdGenerator {
    private static _lastId: number = 0;

    constructor(private _todos: Todo[]) { }

    get nextId(): number {
        return TodoService._lastId += 1;
    }

    add(todo: Todo): Todo {
        todo.id = this.nextId;
        this._todos.push(todo);
        return todo;
    }

    getAll(): Todo[] {
        var clone = JSON.stringify(this._todos);
        return JSON.parse(clone);
    }

    getById(todoId: number): Todo {
        var filtered = this._todos.filter(x => x.id == todoId);
        if (filtered.length) return filtered[0];
        return null;
    }

    delete(todoId: number): void {
        var toDelete = this.getById(todoId);
        var deletedIndex = this._todos.indexOf(toDelete);
        this._todos.splice(deletedIndex, 1);
    }
}