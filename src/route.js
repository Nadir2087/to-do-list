import {createRouter,createWebHashHistory} from 'vue-router'
import tdHome from './components/td-home.vue'
import tdTasks from './components/td-tasks.vue'
import tdChange from './components/td-change.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: tdHome }, 
        { path: '/tasks', component: tdTasks },
        { path: '/change/:inx', component: tdChange },
    ]
})

export default router