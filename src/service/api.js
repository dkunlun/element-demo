import axios from 'axios'

const getFood = () => {
	return axios.get('../../static/tempData/foodList.json')
}

export {
	getFood
}