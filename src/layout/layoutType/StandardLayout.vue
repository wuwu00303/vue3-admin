<template>
  <!-- 标准布局 -->
  <ElContainer class="overflow-hidden h-full">
    <ElHeader class="flex justify-between border h-10">
      <AppHeader></AppHeader>
    </ElHeader>
    <ElContainer class="h-full overflow-hidden">
      <ElAside width="200px" class="h-full border-r" :style="{ width: appStore.menuWidth }">
        <ElScrollbar class="h-full">
          <AppMenu class="border-r-0"></AppMenu>
        </ElScrollbar>
      </ElAside>
    <ElContainer direction="vertical">
      <AppMian></AppMian>
    </ElContainer>
    </ElContainer>
  </ElContainer>
</template>

<script setup lang='ts'>
import AppHeader from '@/layout/header/AppHeader.vue'
import AppMenu from '@/layout/menu/AppMenu.vue'
import useAppStore from '@/stores/appStore'
import AppMian from '@/layout/main/AppMain.vue'


const appStore = useAppStore();


</script>

<style scoped lang='scss'>

</style>