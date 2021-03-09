import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Food from "../views/Food.vue";
import Create from "../views/Create.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/food",
        name: "Food",
        component: Food
    },
    {
        path: "/create",
        name: "Create",
        component: Create
    },
    {
        path: "/result",
        name: "Result",
        component: Result
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;