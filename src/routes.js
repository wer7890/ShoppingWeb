import Introduce from './components/Introduce.vue'
import Commodity from './components/Commodity.vue'
import Activity from './components/Activity.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/Introduce',
        component: Introduce,
    },
    { 
        path: '/Commodity',
        component: Commodity,
    },
    { 
        path: '/Activity',
        component: Activity,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router