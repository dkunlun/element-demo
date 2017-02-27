import App from '../App'
import Hello from '@/components/Hello'

const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')

export default [{
	path: '/',
	component: App,
	children: [
		{
		    path: '',
		    redirect: '/food'
		},
		//首页城市列表页
		{
		    path: '/food',
		    component: food
		}
	]
}]
