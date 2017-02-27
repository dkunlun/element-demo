import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
	foodList: [], //食物列表
	selectedFood: {}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})