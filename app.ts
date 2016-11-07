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