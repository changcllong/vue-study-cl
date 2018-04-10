import Vue from 'vue';
import '@/common/style/index.scss';
import router from '@/router';
import App from '@/App';

console.log(router);

console.log(new Vue({
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app'));
