import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './pages/dashboard.vue'
import Description from './pages/description'
import Index from './pages/index'
import Interest from './pages/interest'
import Login from './pages/login'
import Register from './pages/description'
import Skills from './pages/skills'

Vue.use(Router);

export default new Router({
    routes: [
        {path: "/dashboard", component: Dashboard},
        {path: "/description", component: Description},
        {path: "/", component: Index},
        {path: "/interest", component: Interest},
        {path: "/login", component: Login},
        {path: "/register", component: Register},
        {path: "/skills", component: Skills},
    ]
})
