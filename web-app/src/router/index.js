import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: () => import('../views/Home')
        },
        {
            path: '/add',
            component: () => import('../views/Add')
        },
    ]
})