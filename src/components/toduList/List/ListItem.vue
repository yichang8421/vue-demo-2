<template>
    <div>
        <label>
            <input
                    type="checkbox"
                    :checked="item.completed?'checked':''"
                    @click="handleItem('COMPLETED',item.id)"
            />
        </label>
        <span
                :class="{completed:item.completed}"
        >{{item.text}}</span>
        <button
                @click="handleItem('REMOVE',item.id)"
        >删除
        </button>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class ListItem extends Vue {
        @Prop(Object)
        // eslint-disable-next-line no-undef
        readonly item!: ToDoListItem;

        handleItem(...args: never[]): void {
            this.$emit("handleItem", ...args);
        }
    }
</script>

<style lang="scss" scoped>
    .completed {
        text-decoration: line-through;
    }
</style>