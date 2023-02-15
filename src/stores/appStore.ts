import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { userStorage, setStorage } from '@/utils/storage'

export default defineStore('appStore', () => {
  let isFold = userStorage('isFold', false)
  let menuWidth = computed(() => {
    return isFold.value ? '65px' : '200px'
  })
  let currentLayout = ref(0)
  let drawer = ref(false)
  let interfaceSettings = userStorage('interfaceSettings', { crumbsSwitch: true, tabBarSwitch: true, footerSwitch: true })
  //apptabs 的 ref 对象
  let appTabsRef = ref()
  //当前布局切换
  function setCurrentLayout(num: number) {
    currentLayout.value = num
  }

  return { isFold, menuWidth, currentLayout, drawer, interfaceSettings,appTabsRef,setCurrentLayout, }
})