import { Todo } from './model'

let _lastId: number = 0;

function generateTodoId() {
    return _lastId += 1;
}

export interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

export class TodoService implements ITodoService {
    constructor(private _todos: Todo[]) { }

    add(todo: Todo): Todo {
        todo.id = generateTodoId();
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