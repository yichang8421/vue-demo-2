import reducer from "@/reducers/counter";
import action from "@/actions/counter";

const {PLUS, MINUS} = action

export default (ctx: Data) => {
    const {plus, minus} = reducer(ctx);

    return function (type: string) {
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