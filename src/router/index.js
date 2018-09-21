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
			path: '/views',
			component: resolve => require(['@/components/views'], resolve),
		},
		{
			path: '/register',
			component: resolve => require(['@/components/login/register'], resolve),
		},
		{
			path: '/login',
			component: resolve => require(['@/components/login/login'], resolve),
		},
		{
			path: '/forget',
			component: resolve => require(['@/components/login/forget'], resolve),
		},
		{
			path: '/done',
			component: resolve => require(['@/components/login/done'], resolve),
		},
		{
			path: '/mine',
			component: resolve => require(['@/components/mine/mine'], resolve),
		},
		{
			path: '/notLogin',
			component: resolve => require(['@/components/mine/notLogin'], resolve),
		},
		{
			path: '/scanCode',
			component: resolve => require(['@/components/open/scanCode'], resolve),
		},
		{
			path: '/openDoor',
			component: resolve => require(['@/components/open/openDoor'], resolve),
		},
		{
			path: '/nearby',
			component: resolve => require(['@/components/open/nearby'], resolve),
		},
		{
			path: '/consume',
			component: resolve => require(['@/components/open/consume'], resolve),
		},
		{
			path: '/search',
			component: resolve => require(['@/components/open/search'], resolve),
		},
  ]
})
