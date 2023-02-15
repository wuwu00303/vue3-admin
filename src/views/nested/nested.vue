<template>
  <div class="w-full h-full relative bg-white">
  <iframe  :src="(route.meta.iframe as string)" width="100%" height="100%"></iframe>
  <ElTooltip content="浏览器打开" placement="top-end">
    <ElIcon :size="50" class="absolute bottom-5 right-10 cursor-pointer" @click="open"><ChromeFilled /></ElIcon>
  </ElTooltip>
  </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router';


const route = useRoute()

function open(){
  window.open(route.meta.iframe as string)
}
</script>

<style scoped lang='scss'>
</style>