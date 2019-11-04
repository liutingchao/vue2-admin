import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './modules/tagsView'
import loading from './modules/loading'

Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
    modules: {
	   tagsView,
	   loading
	}
})