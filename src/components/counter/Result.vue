<template>
    <h1>{{result}}</h1>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Result extends Vue {
        @Prop(Number)
        readonly result!: number;
    }
</script>