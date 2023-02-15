<template>
  <ElRadioGroup v-bind="$attrs">
    <template v-if="button">
      <ElRadioButton v-for="item in options" :key="item.label" v-bind="item" :label="item.value">{{ item.label }}
      </ElRadioButton>
    </template>
    <template v-else>
      <ElRadio v-for="item in options" :key="item.label" v-bind="item" :label="item.value">{{ item.label }}</ElRadio>
    </template>
  </ElRadioGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
<script setup lang='ts'>
defineProps({
  options: {
    type: Array as any,
    defalut: () => {
      return []
    }
  },
  button: {
    type: Boolean,
    defalut: false
  },
})
</script>

<style scoped lang='scss'>

</style>