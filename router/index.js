import Vue from 'vue'
import VueRouter from 'vue-router'
import SubHome from '../components/SubHome'
import SubAbout from '../components/SubAbout'

Vue.use(VueRouter)


const routes = [
    {
        name: 'sub-home',
        path: '/',
        component: SubHome
    },
    {
        name: 'sub-about',
        path: '/about',
        component: SubAbout
    }
]

export default routes