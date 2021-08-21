<template>
    <div>
        <counter-result :result="result"/>

        <counter-button
                innerText="+1"
                action="plas"
                @compute="compute"
        />
        <counter-button
                innerText="-1"
                action="minus"
                @compute="compute"
        />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import CounterResult from "@/components/counter/Result";
    import CounterButton from "@/components/counter/Button";

    @Component({
        components: {CounterResult, CounterButton}
    })
    export default class Counter extends Vue {
        result = 0;

        compute(action: string):void {
            switch (action) {
                case "plas":
                    this.result += 1;
                    break;
                case "minus":
                    this.result -= 1;
                    break;
                default:
                    break;
            }
        }
    }
</script>