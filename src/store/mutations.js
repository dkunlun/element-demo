import {
	GET_FOOD_LIST,
	SELECT_FOOD,
	SEARCH_BOOK
} from './mutations-types'

export default {
	[GET_FOOD_LIST] (state, foodList) {
		state.foodList = foodList
	},
	[SELECT_FOOD] (state, selectedFood) {
		state.selectedFood = selectedFood
	},
	[SEARCH_BOOK] (state, list) {
		state.bookList = list
	}
}