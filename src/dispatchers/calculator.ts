import reducer from "@/reducers/calculator";
import action from "@/actions/calculator";

const {SET_NUMBER, CHANGE_METHOD} = action;

export default (ctx: CalculatorData) => {
    const {setNumber, changeMethod} = reducer(ctx);

    return function (type: string, ...args: any[]): void {
        switch (type) {
            case SET_NUMBER:
                // @ts-ignore
                ctx.result = setNumber(...args);
                break;
            case CHANGE_METHOD:
                // @ts-ignore
                ctx.result = changeMethod(...args);
                break;
            default:
                break;
        }
    };
}