<template>
    <div>
        <ul>
            <list-item
                    v-for="(item,index) of todoData"
                    :key="index"
                    :item="item"
                    @handleItem="handleItem"
            />
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import ListItem from "@/components/toduList/List/ListItem.vue";

    @Component({
        components: {
            ListItem
        }
    })
    export default class List extends Vue {
        @Prop(Array)
        readonly todoData!: [];

        handleItem(...args: never[]): void {
            this.$emit("dispatch", ...args);
        }
    }
</script>

<style lang="scss" scoped>

</style>