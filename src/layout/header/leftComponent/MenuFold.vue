<template>
  <ElIcon size="25px" @click="appStore.isFold = !appStore.isFold" class="cursor-pointer">
    <Expand v-if="appStore.isFold" />
    <Fold v-else />
  </ElIcon>
</template>

<script setup lang='ts'>
import useAppStore from '@/stores/appStore'
const appStore = useAppStore();
</script>

<style scoped lang='scss'>

</style>
