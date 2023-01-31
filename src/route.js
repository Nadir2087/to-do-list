import {createRouter,createWebHashHistory} from 'vue-router'
import tdHome from './components/td-home.vue'
import tdTasks from './components/td-tasks.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: tdHome }, 
        { path: '/tasks', component: tdTasks },
    ]
})

export default router