import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import article from '@/components/article'
import topic from '@/components/topic'
import topic_article from '@/components/topic_article'
import bonus from '@/components/bonus'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	component: home,
			name: 'Home',
			children: [{
				path: '/', 
				component: article,
			}]
		},
		{
			path: '/topic',
			component: topic,
			name: 'Topic',
			children: [
				{
					path: '/',
					component: topic_article
				}
			]
		},
		{
			path: '/bonus',
			name: 'bonus',
			component: bonus
		}
  ]
})
