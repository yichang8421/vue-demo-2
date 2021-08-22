type CounterData = {
    result: number
}

type CalculatorData = {
    firstNumber: number;
    secondNumber: number;
    curMethod: string;
    result: number;
}

type CalReducer = {
    setNumber(field: string, value: number): number,
    changeMethod: (method: string) => number
}

type CalAction = {
    SET_NUMBER: string,
    CHANGE_METHOD: string
}

type Action = {
    PLUS: string,
    MINUS: string
}

type CounterReducer = {
    plus(): number,
    minus: () => number
};

type ToDoListItem = {
    text: string,
    completed: boolean,
    id: Date
}

type TodoListAction = {
    ADD: string,
    REMOVE: string,
    COMPLETED: string
}

type TodoList = {
    title: string;
    todoData: ToDoListItem[];
}

type TodoData = ToDoListItem[]