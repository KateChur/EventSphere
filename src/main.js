import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router/router.js";
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-purple/theme.css'
import 'primeicons/primeicons.css'
import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            recomendatons: {},
            userInfo: {}
        }
    },
    actions: {
        updateRecomendatons({ commit }, payload) {
            commit('updateRecomendatons', payload)
        },
        updateUserInfo({ commit }, payload) {
            commit('updateUserInfo', payload);
            console.log(store.state.userInfo)
        },

    },
    mutations: {
        updateRecomendatons(state, payload) {
            state.recomendatons = payload
        },
        updateUserInfo(state, payload) {
            state.userInfo = payload
        }
    },
    getters: {
        getRecomendatons (state) {
            return state.recomendatons
        },
        getUserInfo (state) {
            console.log(state)
            return state.userInfo
        }
    }
})

createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(store)
    .mount('#app')

