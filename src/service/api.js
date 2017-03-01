import axios from 'axios'

const getFood = () => {
	return axios.get('../../static/tempData/foodList.json')
}

const searchBook = (keyWord) => {
	return axios.get('/api/getSearchList', {
		params: {
			key: keyWord
		}
	})
}

export {
	getFood,
	searchBook
}