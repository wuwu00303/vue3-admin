<template>
  <!-- 水平布局 -->
   <ElContainer class="h-full">
      <ElHeader class="flex justify-between border">
        <AppMenu class="flex-1 overflow-hidden border-0"></AppMenu>
        <ToolBarRight></ToolBarRight>
      </ElHeader>
      <AppMain></AppMain>
    </ElContainer>
</template>

<script setup lang='ts'>
import AppMenu from '@/layout/menu/AppMenu.vue'
import ToolBarRight from '@/layout/header/ToolBarRight.vue';
import AppMain from '@/layout/main/AppMain.vue'
</script>

<style scoped lang='scss'>
</style>