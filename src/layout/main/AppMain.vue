<template>
  <!-- <ElContainer class="flex flex-col"> -->
    <AppTabs @refresh="refresh" ref="tabsRef" v-if="appStore.interfaceSettings.tabBarSwitch"></AppTabs>
    <ElMain class="p-2 bg-gray-200">
      <RouterView v-slot="{ Component, route }" class="p-3">
        <Transition name="el-fade-in-linear" mode="out-in">
          <KeepAlive :include="list">
            <component :is="Component" :key="(keyMap[route.path] || route.path)"></component>
          </KeepAlive>
        </Transition>
      </RouterView>
    </ElMain>
    <ElFooter v-if="appStore.interfaceSettings.footerSwitch" class="border border-x-0 h-10"></ElFooter>
  <!-- </ElContainer> -->
</template>

<script setup lang='ts'>
import AppTabs from '@/layout/tabs/AppTabs.vue'
import { dynamicRouting } from '@/router/routes'
import type { MenuItem } from '@/router/routes'
import useAppSotre from '@/stores/appStore'
import { reactive, ref,toRef } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const appStore = useAppSotre()

let list = ref(getKeepAliveNames(dynamicRouting))
let keyMap = reactive<{ [k: string]: number }>({})
let tabsRef = toRef(appStore,'appTabsRef')

function getKeepAliveNames(arr: MenuItem[], list: string[] = []) {
  arr.forEach((item) => {
    if (item.children && item.children.length > 0) {
      getKeepAliveNames(item.children, list)
    } else if (item.meta && item.meta.keepAlive) {
      let b = list.includes(item.name as string)
      if (!b) {
        list.push(item.name as string)
      }
    }
  })
  return list
}

function refresh() {
  keyMap[route.path] = new Date().getTime()
}

</script>

<style scoped lang='scss'>

</style>