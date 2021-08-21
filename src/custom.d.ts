type Data = {
    result: number
}

type Action = {
    PLUS: string,
    MINUS: string
}

type CounterReducer = {
    plus(): number,
    minus: () => number
};
