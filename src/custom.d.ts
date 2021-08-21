type CounterData = {
    result: number
}

type CalculatorData = {
    firstNumber: number;
    secondNumber: number;
    curMethod: string;
    result: number;
    setNumber?: (field: string, value: number) => number,
    changeMethod?: (method: string) => number
}

type CalReducer = {
    setNumber(field: string, value: number): number,
    changeMethod: (method: string) => number
}

type Action = {
    PLUS: string,
    MINUS: string
}

type CounterReducer = {
    plus(): number,
    minus: () => number
};
