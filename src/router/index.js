import Vue from 'vue'
import Router from 'vue-router'

import sidebar from '@/components/sidebar'
import home from '@/components/home'
import article from '@/components/article'
import topic from '@/components/topic'
import topic_article from '@/components/topic_article'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/home',
			redirect: {name: 'Home'},
    	component: home
    },
    {
    	path: '/',
			name: 'Home',
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
    	component: topic,
			children: [
				{
					path: '/topic',
					component: topic_article
				}
			]
    }
  ]
})
