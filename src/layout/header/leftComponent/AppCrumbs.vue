<template>
  <div>
    <ElBreadcrumb separator-icon="ArrowRight" class="mx-3">
      <ElBreadcrumbItem :to="(item.to as string)" v-for="item in list" :key="item.path">
        <div class="flex space-x-1">
          <ElIcon>
            <component :is="item.icon"></component>
          </ElIcon>
          <span> {{ item.title }}</span>
        </div>
      </ElBreadcrumbItem>
    </ElBreadcrumb>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


//面包屑数据
const list = computed(() => {
  return route.matched.filter((item) => {
    return item.meta && item.meta.title
  }).map((v) => {
    return {
      name: v.name,
      path: v.path,
      title: v.meta.title,
      icon: v.meta.icon,
      to: v.redirect || ''
    }
  })
})
</script>

<style scoped lang='scss'>

</style>