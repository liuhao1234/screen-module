import Vue from 'vue'
import VueRouter from 'vue-router'
import pagea from '../pages/page-a.vue'
import pageb from '../pages/page-b.vue'
Vue.use(VueRouter);
const routes = [{
    path: '/pagea',
    component: pagea
},
{
    path: '/pageb',
    component: pageb
}]

const router = new VueRouter({
    routes
})
export default router