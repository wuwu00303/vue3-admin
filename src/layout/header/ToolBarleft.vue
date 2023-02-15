<template>
  <div class="h-full flex items-center">
    <MenuFold></MenuFold>
    <AppCrumbs  v-if="appStore.interfaceSettings.crumbsSwitch"></AppCrumbs>
  </div>
</template>

<script setup lang='ts'>
import MenuFold from './leftComponent/MenuFold.vue'
import AppCrumbs from './leftComponent/AppCrumbs.vue';
import useAppstore from '@/stores/appStore'

const appStore = useAppstore()


</script>

<style scoped lang='scss'>

</style>