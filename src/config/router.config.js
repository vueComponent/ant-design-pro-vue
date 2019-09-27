// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse,baogao,bingli,fangshi,ruzhu,wenjuan,zhanghao,home } from '@/core/icons'
export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/analysis',
    children: [
      // dashboard
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: '首页', keepAlive: true, icon: home, permission: [ 'dashboard' ] }
      },
      {
        path: '/list/index',
        name: 'list',
        component: () => import('@/views/list/TableList'),
        meta: { title: '病例管理', keepAlive: true, icon: bingli}
      },
      {
        path: '/acute/index',
        name: 'list2',
        component: () => import('@/views/acute/TableList'),
        meta: { title: '急性加重', keepAlive: true, icon: bingli}
      },
      {
        path: '/list/basis/:id(\\d*)',
        name: 'basis',
        hidden:true,
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/account/center/Index'),
      },
      {
        path: '/list/basis/:id(\\d+)/1',
        name: 'mask1',
        hidden: true,
        hideChildrenInMenu: true,
        component: () => import('@/views/account/center/components/mask-1'),
        meta: {maskId: 1}
      },
      {
        path: '/list/basis/:id(\\d+)/2',
        name: 'mask2',
        hidden: true,
        hideChildrenInMenu: true,
        component: () => import('@/views/account/center/components/mask-2'),
        meta: {maskId: 2}
      },
      {
        path: '/list/task/:id(\\d*)',
        name: 'taskDetail',
        hidden: true,
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/account/center/task'),
      },
      {
        path: '/task/index',
        name: 'Task',
        component: () => import('@/views/task/index'),
        meta: { title: '访视任务', keepAlive: true, icon: fangshi}
      },
      {
        path: '/gallery/index',
        name: 'Gallery',
        component: () => import('@/views/gallery/index'),
        meta: { title: '报告采集', keepAlive: true, icon: baogao,isBack:false}
      },
      {
        path: '/caseTransfer/index',
        name: 'CaseTransfer',
        component: () => import('@/views/caseTransfer/index'),
        meta: { title: '病例转移申请', keepAlive: true, icon: baogao,isBack:false}
      },
      {
        path: '/gallery/detail/:id(\\d*)',
        name: 'collectDetail',
        hidden: true,
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/account/center/collect'),
      },
      {
        path: '/group/index',
        name: 'Group',
        component: () => import('@/views/group/index'),
        meta: { title: '入组管理', keepAlive: true, icon: ruzhu,isBack:false}
      },
      {
        path: '/group/addProject',
        name: 'addProject',
        hidden:true,
        component: () => import('@/views/group/addProject'),
        meta: { hiddenHeaderContent:true, hidden: true }
      }
    ]
  },
 
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]