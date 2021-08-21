<template>
    <div>
        Calculator.vue
        <Nav/>
        <cal-result :result="result"/>
        <div class="inputs">
            <cal-input
                    field="firstNumber"
                    @setNumber="setNumber"
            />
            <cal-input
                    field="secondNumber"
                    @setNumber="setNumber"
            />
        </div>
        <div class="buttons">
            <cal-button
                    innerText="+"
                    method="plus"
                    :curMethod="curMethod"
                    @changeMethod="changeMethod"
            />
            <cal-button
                    innerText="-"
                    method="minus"
                    :curMethod="curMethod"
                    @changeMethod="changeMethod"
            />
            <cal-button
                    innerText="*"
                    method="mul"
                    :curMethod="curMethod"
                    @changeMethod="changeMethod"
            />
            <cal-button
                    innerText="/"
                    method="div"
                    :curMethod="curMethod"
                    @changeMethod="changeMethod"
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

        compute(method, fNumber, sNumber) {
            switch (method) {
                case "plus":
                    return fNumber + sNumber;
                case "minus":
                    return fNumber - sNumber;
                case "mul":
                    return fNumber * sNumber;
                case "div":
                    return fNumber / sNumber;
                default:
                    break;
            }
        }

        setNumber(field: string, value: number): void {
            this[field] = value;
            this.setResult();
        }

        changeMethod(method) {
            this.curMethod = method;
            this.setResult();
        }

        setResult() {
            this.result = this.compute(
                this.curMethod,
                this.firstNumber,
                this.secondNumber
            );
        }
    }
</script>

<style lang="scss" scoped>

</style>