<template>
    <ElIcon @click="appStore.drawer=!appStore.drawer" class="cursor-pointer">
      <Operation/>
    </ElIcon>
</template>

<script setup lang='ts'>
// import { Operation } from '@element-plus/icons-vue';
import useAppStore from '@/stores/appStore'
const appStore = useAppStore()

</script>

<style scoped lang='scss'>

</style>