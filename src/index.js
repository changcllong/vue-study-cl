import Vue from 'vue';
import '@/common/style/index.scss';
import router from '@/router';
import App from '@/App';
import store from '@/store';

console.log(router);

console.log(new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app'));
