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

var todo = {
    name: "Pick up drycleaning",
}

class SmartTodo {
    _state: TodoState

    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get state() {
        return this._state;
    }

    set state(newState: TodoState) {
        if (newState == TodoState.Complete) {
            var canBeCompleted = (this.state == TodoState.Active || this.state == TodoState.Deleted)
            if (!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed. "
            }
        }
        this._state = newState;
    }
}

class TodoStateChanger {
    constructor(private newState: TodoState) {
    }

    canChangeState(todo: Todo): boolean {
        return !!todo;
    }

    changeState(todo: Todo): Todo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }

        return todo;
    }
}

class CompleteTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return super.canChangeState(todo) && (
            todo.state == TodoState.Active ||
            todo.state == TodoState.Deleted
        );
    }
}