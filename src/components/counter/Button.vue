<template>
    <span class="wrapper">
        <button
                :action="action"
                @click="compute"
        >
            {{innerText}}
        </button>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Button extends Vue {
        @Prop(String)
        readonly action!: string;
        @Prop(String)
        readonly innerText!: string;

        compute(): void {
            this.$emit("dispatch", this.action);
        }
    }
</script>

<style lang="scss" scoped>
    button {
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        margin-right: 16px;

        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }
</style>