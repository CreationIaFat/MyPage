import { createRouter, createWebHistory } from 'vue-router'
import test from './../components/pages/test.vue'
import test2 from './../components/pages/test2.vue'
import test3 from './../components/pages/test3.vue'
import test4 from './../components/pages/test4.vue'

const routes = [
    {
        path: '/',
        name: 'teat',
        component: test,
    },
    {
        path: '/test2',
        name: 'teat2',
        component: test2,
    },  
    {
        path: '/test3',
        name: 'teat3',
        component: test3,
    },
    {
        path: '/test4',
        name: 'teat4',
        component: test4,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router