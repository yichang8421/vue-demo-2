<template>
    <div>Counter.vue
        <Nav/>
        <counter-result :result="result"/>

        <counter-button
                innerText="+1"
                action="plus"
                @dispatch="dispatch"
        />
        <counter-button
                innerText="-1"
                action="minus"
                @dispatch="dispatch"
        />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import CounterResult from "@/components/counter/Result";
    import CounterButton from "@/components/counter/Button";
    import dispatch from "@/dispatchers/counter";

    @Component({
        components: {CounterResult, CounterButton}
    })
    export default class Counter extends Vue {
        result = 0;

        // eslint-disable-next-line no-undef
        dispatch(action: string): void {
            dispatch(this)(action);
        }
    }
</script>