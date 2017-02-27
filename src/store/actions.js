import { GET_FOOD_LIST,SELECT_FOOD } from './mutations-types'
import { getFood } from '../service/api'

const getFoodList = ({commit}) => {
	getFood().then((response) => {
		commit(GET_FOOD_LIST, response.data)
	})
}

const selectFood = ({commit}, food) => {
	commit(SELECT_FOOD, food)
}

export {
	getFoodList,
	selectFood
}