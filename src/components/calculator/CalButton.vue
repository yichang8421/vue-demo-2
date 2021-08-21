<template>
    <button
            :method="method"
            :class="{current:method === curMethod}"
            @click="changeMethod"
    >
        {{innerText}}
    </button>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class CalButton extends Vue {
        @Prop(String)
        readonly innerText: string;
        @Prop(String)
        readonly method: string;
        @Prop(String)
        readonly curMethod: string;

        changeMethod() {
            this.$emit("changeMethod", this.method);
        }
    }
</script>

<style lang="scss" scoped>
    button {
        margin-top: 2em;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        margin-right: 16px;

        &.current {
            background-color: orange;
        }
    }

</style>