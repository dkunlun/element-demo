import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/'
import store from './store/'

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

// new Vue({
// 	el: '#app',
// 	router: router,
// 	render: h => h(App)
// })

new Vue({
	router,
	store
}).$mount('#app')
