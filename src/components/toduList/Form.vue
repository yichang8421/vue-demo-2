<template>
    <div>
        <form @submit="submitText">
            <label>
                <input
                        type="text"
                        v-model.trim="todoText"
                        placeholder="Input what you wanna add"
                />
            </label>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Form extends Vue {
        todoText = "";

        submitText(e: Event): void {
            e.preventDefault();

            if (this.todoText.length) {
                this.$emit("dispatch", "ADD", {
                    id: Date.now(),
                    text: this.todoText,
                    completed: false
                });

                this.todoText = "";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>