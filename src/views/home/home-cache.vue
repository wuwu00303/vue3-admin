<template>
  <div class="p-4 bg-white h-full">
    <p class="mb-2">带有缓存的页面，输入input进行测试</p>
    <ElInput v-model="value"></ElInput>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
let value = ref("")
</script>

<style scoped lang='scss'>

</style>