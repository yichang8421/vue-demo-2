import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

// @ts-ignore
import Counter from "@/views/Counter";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        redirect: "/counter"
    },
    {
        path: "/counter",
        component: Counter
    }
];

const router = new VueRouter({
    routes
});

export default router;
