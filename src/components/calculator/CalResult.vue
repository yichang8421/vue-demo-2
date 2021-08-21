<template>
    <div>
        <h1>{{result}}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class CalResult extends Vue {
        @Prop(Number)
        readonly result: number;
    }
</script>

<style lang="scss" scoped>

</style>