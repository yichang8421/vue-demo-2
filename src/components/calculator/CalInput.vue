<template>
    <label>
        <input type="text"
               value="0"
               @input="setNumber"
               v-model="currentValue"
        />
    </label>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class CalInputs extends Vue {
        @Prop(String)
        readonly field: string;

        currentValue = 0;

        setNumber(): void {
            // e类型有问题
            // const value = Number(e.target.value);
            this.currentValue = Number(this.currentValue);
            this.$emit("setNumber", this.field, this.currentValue);
        }
    }
</script>

<style lang="scss" scoped>
    input {
        margin-right: 1em;
    }
</style>