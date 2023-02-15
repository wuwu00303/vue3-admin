<template>
    <ElSubMenu v-if="props.menu.children && props.menu.children.length > 0" :index="props.menu.path">
      <template #title>
        <ElIcon>
          <component :is="props.menu.meta.icon"></component>
        </ElIcon>
        <span>{{ props.menu.meta.title }}</span>
      </template>
      <SubMenu v-for="child in props.menu.children" :key="child.path" :menu="(child as MenuItem)"></SubMenu>
    </ElSubMenu>
    <ElMenuItem v-else :index="props.menu.path">
      <ElIcon>
        <component :is="props.menu.meta.icon"></component>
      </ElIcon>
      <span>{{ props.menu.meta.title }}</span>
    </ElMenuItem>
</template>

<script setup lang='ts'>
import type { MenuItem } from '@/router/routes'
import type { PropType } from 'vue';

const props = defineProps({
  menu: {
    type: Object as PropType<MenuItem>,
    required: true,
  }
})
</script>

<style scoped lang='scss'>

</style>