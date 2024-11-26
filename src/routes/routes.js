import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import { defineAsyncComponent } from 'vue'

const routes = [
    {
        path: '/',
        name: '/',
        component: HelloWorld
    },
    // lazy loading
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('../components/Demo.vue')
    },
    {
        path: '/demo/:id',
        name: 'DemoId',
        component: () => import('../components/Demo.vue')
    }
    // suspense and defineAsyncComponent
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router