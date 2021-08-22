export default function toduReducer(data: TodoData) {
    function addItem(newItem: ToDoListItem) {
        // @ts-ignore
        return data.concat(newItem);
    }

    function removeItem(id: Date) {
        return data.filter((item: ToDoListItem) => item.id !== id);
    }

    function changeCompleted(id: Date) {
        return data.map((item: ToDoListItem) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
    }

    return {
        addItem,
        removeItem,
        changeCompleted
    };
}