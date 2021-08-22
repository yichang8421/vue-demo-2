import reducer from "@/reducers/toduList";
import actions from "@/actions/todoList";

const {ADD, REMOVE, COMPLETED} = actions;

export default (ctx: TodoList) => {
    const {
        addItem,
        removeItem,
        changeCompleted
    } = reducer(ctx.todoData);

    return function (type: string, arg: any) {
        switch (type) {
            case ADD:
                ctx.todoData = addItem(arg);
                break;
            case REMOVE:
                ctx.todoData = removeItem(arg);
                break;
            case COMPLETED:
                ctx.todoData = changeCompleted(arg);
                break;
            default:
                break;
        }
    };
}