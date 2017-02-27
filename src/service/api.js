import axios from 'axios'

const getFood = () => {
	return axios.get('/src/service/tempData/foodList.json')
}

export {
	getFood
}