import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/hello/hello'
import Home from '@/components/home/home'
import Nofind from '@/components/404/Nofind'

Vue.use(VueRouter)
const routes = [//设置路由的页面
    {
        path: '/home',
        // redirect:'/hello', //重定向至 某个页面
        component: Home,
    },
    {
        path: '/hello',
        title: '首页',
        name: 'Hello',
        component: Hello
    },
    {
        path: '*',
        name: '404',
        component: Nofind,          //--》 404页面
    },
    {
        path: '/',
        component: Home,          //--》  默认的路由页面没有hash默认跳转到home
    }
]


const router = new VueRouter({
  routes: routes,
  // redirect: '/Hello',
  linkActiveClass: 'active'//改变当前选中的路由的class
});

// router.push('/home');// 强制设置默认启动的路由页面


var a = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
