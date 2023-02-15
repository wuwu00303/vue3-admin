<template>
  <ElSelect v-bind="$attrs">
    <slot>
      <ElOption v-for="option in options" :key="option.value" v-bind="option">
        <slot name="option" v-bind="option"></slot>
      </ElOption>
    </slot>
  </ElSelect>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>
<script setup lang='ts'>

type Option = { label: string, value: string | number, disabled?: boolean }

withDefaults(defineProps<{
  options?: Option[],
}>(), {
  options: () => []
})
</script>

<style scoped lang='scss'>

</style>