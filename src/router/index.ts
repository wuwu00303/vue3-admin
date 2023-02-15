import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import useUserStore from '@/stores/userStore'
import { ElMessage } from 'element-plus'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to: any, from, next) => {
  const userStore = useUserStore()
  const isToken = userStore.userInfo.token == ''
  const hsRole = to.meta.roles ? to.meta.roles.includes(userStore.userInfo.role) : true

  if (isToken && to.path !== '/login') {
    next({ path: '/login' })
    ElMessage.error('请先登陆')
    return
  }

  if (!hsRole) {
    next({ path: '/mistake' })
    return
  }
  next()
})


export default router
