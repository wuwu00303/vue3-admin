<template>
  <!-- 垂直布局 -->
  <ElContainer class="h-full">
    <!-- 侧边栏 -->
    <ElAside width="200px" class="h-full overflow-hidden border-r" :style="{ width: appStore.menuWidth }">
      <ElScrollbar>
      <AppMenu class="border-r-0"></AppMenu>
      </ElScrollbar>
    </ElAside>
    <!-- 主要内容 -->
    <ElContainer>
      <ElHeader class="flex justify-between border-b h-10">
        <AppHeader></AppHeader>
      </ElHeader>
      <AppMain></AppMain>
    </ElContainer>
  </ElContainer>
</template>

<script setup lang='ts'>
import useAppStore from '@/stores/appStore'
import AppMenu from '@/layout/menu/AppMenu.vue'
import AppHeader from '@/layout/header/AppHeader.vue'
import AppMain from '@/layout/main/AppMain.vue'

const appStore = useAppStore();
</script>

<style scoped lang='scss'>
</style>