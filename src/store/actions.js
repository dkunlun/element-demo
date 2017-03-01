import { GET_FOOD_LIST,SELECT_FOOD,SEARCH_BOOK } from './mutations-types'
import { getFood,searchBook } from '../service/api'

const getFoodList = ({commit}) => {
	getFood().then((response) => {
		commit(GET_FOOD_LIST, response.data)
	})
}

const selectFood = ({commit}, food) => {
	commit(SELECT_FOOD, food)
}

const searchBookByKey = ({commit}, keyWord) => {
	searchBook(keyWord).then((response) => {
		commit(SEARCH_BOOK, response.data.data)
	})
}

export {
	getFoodList,
	selectFood,
	searchBookByKey
}