import Vue from 'vue'
import router from './router/router'
import store from './vuex/index'
import * as echarts from 'echarts'
import App from './App.vue'
// 生产环境配置
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
