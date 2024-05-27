import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import AboutUs from "@/pages/AboutUs.vue";
import EventUser from "@/components/events/EventUser.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import EventPage from "@/pages/EventPage.vue";
import Locations from "@/pages/LocationsPage.vue";
import LocationsPage from "@/pages/LocationsPage.vue";
import UserPage from "@/pages/UserPage.vue";
import ThankYouMessagePage from "@/pages/ThankYouMessagePage.vue";
import OrderPage from "@/pages/OrderPage.vue";
import CreateOrderPage from "@/pages/CreateOrderPage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage
    },
    {
        path: '/home',
        name: 'Home1',
        component: MainPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUs,
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
    {
        path: '/events/:id',
        component: EventUser,
        props: true,
    },
    {
        path: '/locations',
        name: 'LocationsPage',
        component: LocationsPage,
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage,
    },
    {
        path: '/thank_you',
        name: 'ThankYouPage',
        component: ThankYouMessagePage,
    },
    {
        path: '/order',
        name: 'OrderPage',
        component: OrderPage,
    },{
        path: '/createOrder',
        name: 'CreateOrderPage',
        component: CreateOrderPage,
    },

]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
