import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			component: resolve => require(['@/components/start'], resolve),
		},
		{
			path: '/register',
			component: resolve => require(['@/components/login/register'], resolve),
		},
		{
			path: '/login',
			component: resolve => require(['@/components/login/login'], resolve),
		},
  ]
})
