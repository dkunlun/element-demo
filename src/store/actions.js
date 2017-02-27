import { GET_FOOD_LIST,SELECT_FOOD } from './mutations-types'
import { getFood } from '../service/api'

const getFoodList = ({commit}) => {
	// getFood().then((response) => {
	// 	commit(GET_FOOD_LIST, response.data)
	// })
	var data = [{
				    "value": "a",
				    "label": "黄金糕"
				}, {
				    "value": "b",
				    "label": "双皮奶"
				}, {
				    "value": "c",
				    "label": "蚵仔煎"
				}, {
				    "value": "d",
				    "label": "龙须面"
				}, {
				    "value": "e",
				    "label": "北京烤鸭"
				}]
	commit(GET_FOOD_LIST, data)
}

const selectFood = ({commit}, food) => {
	commit(SELECT_FOOD, food)
}

export {
	getFoodList,
	selectFood
}