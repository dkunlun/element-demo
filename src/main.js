import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/'
import store from './store/'
import axios from 'axios'

Vue.use(VueRouter)

axios.interceptors.request.use(function (config) {
	// Do something before request is sent
		console.log(config)
		return config;
	}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

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
