export default {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/layout/index.vue'),
    meta: {
        role: ['common', 'admin']
    },
    children: [
        {
            path: '/home',
            name: 'HomePage',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
            meta: {
                isShow: true,
                title: '首页'
            }
        },
        {
            path: '/search',
            name: 'SearchPage',
            component: () => import(/* webpackChunkName: "search" */ '@/views/search/index.vue'),
            meta: {
                title: '搜索模块',
                isShow: true
            }
        },
        {
            path: '/setting',
            name: 'SettingPage',
            component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
            meta: {
                title: '设置模块',
                isShow: true
            }
        }
    ]
};
