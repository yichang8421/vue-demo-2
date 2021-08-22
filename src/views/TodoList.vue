<template>
    <div>
        <Nav/>
        TodoList.vue
        <td-title :title="title"/>
        <td-form @dispatch="dispatch"/>
        <td-list
                :todoData="todoData"
                @dispatch="dispatch"
        />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import TdTitle from "@/components/toduList/Title.vue";
    import TdForm from "@/components/toduList/Form.vue";
    import TdList from "@/components/toduList/List/index.vue";

    import dispatch from "@/dispatchers/todoList";

    @Component({
        components: {
            TdTitle,
            TdForm,
            TdList
        }
    })
    export default class TodoList extends Vue {
        title = "Todo List";
        todoData = [];

        dispatch(...args: never[]): void {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            dispatch(this)(...args);
        }
    }
</script>

<style lang="scss" scoped>

</style>