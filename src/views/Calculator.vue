<template>
    <div>
        Calculator.vue
        <Nav/>
        <cal-result :result="result"/>
        <div class="inputs">
            <cal-input
                    field="firstNumber"
                    @dispatch="dispatch"
            />
            <cal-input
                    field="secondNumber"
                    @dispatch="dispatch"
            />
        </div>
        <div class="buttons">
            <cal-button
                    innerText="+"
                    method="plus"
                    :curMethod="curMethod"
                    @dispatch="dispatch"
            />
            <cal-button
                    innerText="-"
                    method="minus"
                    :curMethod="curMethod"
                    @dispatch="dispatch"
            />
            <cal-button
                    innerText="*"
                    method="mul"
                    :curMethod="curMethod"
                    @dispatch="dispatch"
            />
            <cal-button
                    innerText="/"
                    method="div"
                    :curMethod="curMethod"
                    @dispatch="dispatch"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import CalResult from "@/components/calculator/CalResult.vue";
    import CalInput from "@/components/calculator/CalInput.vue";
    import CalButton from "@/components/calculator/CalButton.vue";

    import dispatch from "@/dispatchers/calculator";

    @Component({
        components: {
            CalResult,
            CalInput,
            CalButton
        }
    })
    export default class Calculator extends Vue {
        firstNumber = 0;
        secondNumber = 0;
        curMethod = "plus";
        result = 0;

        dispatch(...args: never[]): void {
            dispatch(this)(...args);
        }
    }
</script>

<style lang="scss" scoped>

</style>