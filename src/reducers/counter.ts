function counterReducer(data: CounterData): CounterReducer {
    function plus(): number {
        return data.result + 1;
    }

    // const minus = (): number => {
    //     return data.result - 1;
    // };
    function minus(): number {
        return data.result - 1;
    }

    return {plus, minus};
}

export default counterReducer;