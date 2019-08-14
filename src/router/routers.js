export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('@/views/button'),
        meta: {
            title: 'Button 按钮'
        }
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('@/views/input'),
        meta: {
            title: 'Input 输入框'
        }
    }
]