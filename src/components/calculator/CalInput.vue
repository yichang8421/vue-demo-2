<template>
    <input type="text"
           value="0"
           @input="setNumber"
    />
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class CalInputs extends Vue {
        @Prop(String)
        readonly field: string;

        setNumber(e): void {
            const value = Number(e.target.value);
            this.$emit("setNumber", this.field, value);
        }
    }
</script>

<style lang="scss" scoped>
    input {
        margin-right: 1em;
    }
</style>