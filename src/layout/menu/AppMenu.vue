<template>
  <ElMenu @select="jumpPathChange" :collapse="appStore.isFold" :collapse-transition="false" :default-active="route.path"
    :mode="appStore.currentLayout ==2 ?'horizontal':'vertical'" :ellipsis="true">
    <SubMenu v-for="item in menuData" :key="item.path" :menu="item"></SubMenu>
  </ElMenu>
</template>

<script setup lang='ts'>
import SubMenu from './SubMenu.vue';
import { dynamicRouting, type MenuItem } from '@/router/routes'
import { useRouter, useRoute } from 'vue-router';
import useAppStore from '@/stores/appStore'
import useUserStore from '@/stores/userStore'
import { computed } from 'vue';


const router = useRouter();
const route = useRoute();
const appStore = useAppStore();
const userStore = useUserStore();

//点击导航菜单跳转到相对应的页面
function jumpPathChange(index: string) {
  let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i
  if (reg.test(index)) {
    window.open(index)
  } else {
    router.push({ path: index })
  }
}

//权限管理
const menuData = computed(() => {
  return getMenuData(dynamicRouting)
})

function getMenuData(arr: MenuItem[]) {
  return arr.map((item) => ({ ...item })).filter((item) => {
    if (item.children && item.children.length > 0) {
      item.children = getMenuData(item.children)
    }
    let isShow = item.meta.hidden !== true
    let permission = item.meta.roles ? item.meta.roles.includes(userStore.userInfo.role) : true
    return permission && isShow
  })
}

</script>

<style scoped lang='scss'>

</style>