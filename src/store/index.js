import Vue from 'vue';
import Vuex from 'vuex';
import { logPlugin } from '@/store/plugins';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        value: ''
    },

    mutations: {
        updateValue(state, payload) {
            state.value = payload.value;
        }
    },

    plugins: [logPlugin]
});
