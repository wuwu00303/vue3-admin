import type { RouteRecordRaw } from "vue-router"

type MetaProps = {
  title: string, //导航栏标题
  icon?: string  //导航栏图标
  closable?: boolean, //导航栏是否显示关闭按钮
  keepAlive?: boolean, //页面是否缓存
  roles?: string[], //账号内容权限
  hidden?: Boolean, //导航栏是否隐藏
  iframe?: string // 是否是内嵌链接
}
export type MenuItem = { meta: MetaProps, children?: MenuItem[] } & RouteRecordRaw

export const dynamicRouting: MenuItem[] = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      icon: "HomeFilled",
      closable: false,
    },
    children: [],
    component: () => import('@/views/home/home.vue')
  },
  {
    path: "/home-cache",
    name: "home-cache",
    meta: {
      title: "缓存页面",
      icon: "Discount",
      keepAlive: true,
    },
    children: [],
    component: () => import('@/views/home/home-cache.vue')
  },
  {
    path: "/authority",
    name: "authority",
    meta: {
      title: '权限管理',
      icon: "UserFilled",
    },
    children: [
      {
        path: '/authority-cut',
        name: 'authority-cut',
        meta: {
          title: '权限切换',
          icon: "UserFilled",
        },
        children: [],
        component: () => import('@/views/authority/authority-cut.vue')
      },
      {
        path: '/authority-admin',
        name: 'authority-admin',
        meta: {
          title: '管理员可见',
          icon: "UserFilled",
          roles: ['admin'],
        },
        children: [],
        component: () => import('@/views/authority/authority-admin.vue')
      },
      {
        path: '/authority-user',
        name: 'authority-user',
        meta: {
          title: '用户可见',
          icon: "HomeFilled",
          roles: ['user'],
        },
        children: [],
        component: () => import('@/views/authority/authority-user.vue')
      },
    ],
  },
  {
    path: '/nested',
    name: 'nested',
    meta: {
      title: '嵌套网页',
      icon: "Connection",
    },
    children: [
      {
        path: '/nested-cainiao',
        name: 'nested-cainiao',
        meta: {
          title: '菜鸟网页',
          icon: "Connection",
          iframe: 'https://www.runoob.com/try/try.php?filename=tryhtml_iframe'
        },
        children: [],
        component: () => import('@/views/nested/nested.vue')
      },
      {
        path: '/nested-vue3',
        name: 'nested-vue3',
        meta: {
          title: 'vue3网页',
          icon: "Connection",
          iframe: 'https://cn.vuejs.org/api/'
        },
        children: [],
        component: () => import('@/views/nested/nested.vue')
      },
    ],
  },
  {
    path: 'https://element-plus.org/zh-CN/component/menu.html#menu-%E6%96%B9%E6%B3%951',
    name: "http-element-plus",
    meta: {
      title: "外部链接",
      icon: "ChromeFilled",
    },
    children: [],
  },
  {
    path: "/menu",
    name: "menu",
    redirect:"/menu/menu-1",
    meta: {
      title: "多级菜单",
      icon: "Grid",
    },
    children: [
      {
        path: "/menu/menu-1",
        name: "menu-1",
        meta: {
          title: "菜单1",
          icon:"Menu"
        },
        children: [],
        component: () => import('@/views/menu/menu.vue')
      },
      {
        path: "/menu/menu-2",
        name: "menu-2",
        meta: {
          title: "菜单2",
          icon: "Menu"
        },
        children: [
          {
            path: "/menu/menu-2-1",
            name: "menu-2-1",
            meta: {
              title: "菜单2-1",
              icon: "Menu"
            },
            children: [],
            component: () => import('@/views/menu/menu.vue')
          },
        ]
      },
    ],
  },

]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: "login",

    component: () => import('@/views/login/AppLogin.vue')
  },
  {
    path: '/index',
    redirect: "/home",
    component: () => import('@/layout/BasicLayout.vue'),
    children: dynamicRouting
  },
  {
    path: '/mistake',
    name: 'mistake',
    meta: {
      title: '404页面',
    },
    children: [],
    component: () => import('@/views/mistake/mistake.vue')
  },
]
export default routes