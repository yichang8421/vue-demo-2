import reducer from "@/reducers/counter";
import action from "@/actions/counter";

const {PLUS, MINUS} = action;

export default (ctx: CounterData) => {
    const {plus, minus} = reducer(ctx);

    return function (type: string): void {
        switch (type) {
            case PLUS:
                ctx.result = plus();
                break;
            case MINUS:
                ctx.result = minus();
                break;
            default:
                break;
        }

    };
}