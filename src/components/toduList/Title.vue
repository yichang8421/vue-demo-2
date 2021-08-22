<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Title extends Vue {
        @Prop(String)
        readonly title!: string;
    }
</script>

<style lang="scss" scoped>

</style>