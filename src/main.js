import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

Vue.use(ElementUI);

import VueCropper from 'vue-cropper'
Vue.use(VueCropper);

import { base } from './base'
Vue.use(base);

import "@/directive/dragDlg.js"
import "@/directive/promissionBtn.js"

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	let userId = sessionStorage.getItem('userId');
	if(userId) {
		next();
	} else {
		if(to.path == '/login') {
		  	next();
		} else {
			next({path: '/login'});
		}
	}
});

export const vueInstance = new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')