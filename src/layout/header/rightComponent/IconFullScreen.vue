<template>
  <!-- 全屏 -->
  <ElIcon @click="FullScreenChange" class="cursor-pointer">
    <FullScreen />
  </ElIcon>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

let isFullScreen = ref(false);

//全屏
function FullScreenChange() {
  isFullScreen.value = !isFullScreen.value;
  if (isFullScreen.value) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen();
  }
}
</script>

<style scoped lang='scss'>

</style>