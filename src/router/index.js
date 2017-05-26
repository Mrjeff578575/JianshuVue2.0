import Vue from 'vue'
import Router from 'vue-router'

import sidebar from '@/components/sidebar'
import home from '@/components/home'
import article from '@/components/article'
import topic from '@/components/topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
			
    	path: '/home',
    	name: 'Home',
    	component: home
    },
    {
    	path: '/',
    	name: 'main',
    	component: sidebar,
			children: [
        {
          path: '/',
          component: home,
					children: [{
						path: '/', 
						component: article,
					}]
        }
			]
		},
    {
    	path: '/topic',
    	name: 'Topic',
    	component: topic
    }
  ]
})
