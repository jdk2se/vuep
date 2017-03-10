require('./bootstrap');

import VueRouter from 'vue-router';
import App from './components/App';
import { routes } from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    render: h=>h(App)
});
