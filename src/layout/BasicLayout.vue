<template>
  <component :is="layoutTypes[appStore.currentLayout].type"></component>
  <SystemDrawer></SystemDrawer>
</template>

<script setup lang='ts'>
import { reactive,markRaw } from 'vue'
import HorizontalLayout from './layoutType/verticalLayout.vue';
import StanderdLayout from './layoutType/StandardLayout.vue'
import VerticalLayout from './layoutType/HorizontalLayout.vue';
import useAppStore from '@/stores/appStore'
import SystemDrawer from '@/layout/header/rightComponent/SystemDrawer.vue'

const appStore = useAppStore();
const layoutTypes = reactive([
  {
    type: markRaw(StanderdLayout),//标准布局
  },
  {
    type: markRaw(HorizontalLayout) //水平布局
  },
  {
    type: markRaw(VerticalLayout),//垂直布局
  },
])



</script>

<style scoped lang='scss'>

</style>