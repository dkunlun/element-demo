import {
	GET_FOOD_LIST,
	SELECT_FOOD
} from './mutations-types'

export default {
	[GET_FOOD_LIST] (state, foodList) {
		state.foodList = foodList
	},
	[SELECT_FOOD] (state, selectedFood) {
		state.selectedFood = selectedFood
	}
}