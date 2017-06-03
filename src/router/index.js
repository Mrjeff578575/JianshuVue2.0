import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import article from '@/components/article'
import topic from '@/components/topic'
import topic_article from '@/components/topic_article'
import bonus from '@/components/bonus'
import login from '@/components/login'
import download from '@/components/download'

Vue.use(Router)

const router = new Router({
  routes: [
    {
    	path: '/',
    	component: home,
		children: [{
			path: '/',
			name: 'Home',
			component: article,
		}]
	},
	{
		path: '/topic',
		component: topic,
		children: [
			{
				path: '/',
				name: 'Topic',
				component: topic_article
			}
		]
	},
	{
		path: '/bonus',
		name: 'bonus',
		component: bonus
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/download',
		name: 'download',
		component: download
	},
	{ 
		path: '*', 
		name: 'error',
		redirect: {name: 'Home'} 
	}
  ]
})
router.beforeEach((to, from, next) => {
	next();
})
export default router
