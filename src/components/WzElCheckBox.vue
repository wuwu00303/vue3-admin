<!-- eslint-disable vue/no-mutating-props -->
<template>
  <ElCheckboxGroup v-bind="$attrs">
    <component :is="componentName" v-for="item in options" :key="item.label" v-bind="item" :label="item.value">
      {{ item.label }}>
    </component>
  </ElCheckboxGroup>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
<script setup lang='ts'>
import { computed } from 'vue'
let props = defineProps({
  options: {
    type: Array as any,
    default: () => {
      return []
    }
  },
  button: {
    type: Boolean,
    defalut: false,
  }
})

let componentName = computed(() => props.button ? "ElCheckboxButton" : "ElCheckbox")
</script>

<style scoped lang='scss'>

</style>