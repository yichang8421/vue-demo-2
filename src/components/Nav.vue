<template>
    <div>
        <router-link to="/counter">counter</router-link>
        |
        <router-link to="/calculator">calculator</router-link>
        |
        <router-link to="/todulist">todoList</router-link>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Nav extends Vue {

    }
</script>

<style lang="scss" scoped>

</style>