<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="wz-table flex flex-col flex-1 overflow-hidden mt-5">
    <ElTable ref="elTabelRef" :data="data" v-bind="$attrs" class="flex-1" v-loading="loading">
      <ElTableColumn v-for="item in columns" :key="item.label" :label="item.label" :prop="item.prop">
        <template #default="scope">
          <slot v-if="item.slot" :name="item.slot" v-bind="scope"></slot>
        </template>
      </ElTableColumn>
    </ElTable>
    <div class="flex justify-end mt-3">
      <ElPagination :page-cuurentPage="page.currentPage" :page-size="page.size" :total="page.total"
        :page-sizes="[10, 20, 50, 100]" :disabled="loading" :small="true" layout="total, prev, pager, next,sizes"
        @update:current-page="currentPageChange" @update:page-size="pageSizeChange" />
    </div>
  </div>
</template>
<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => {
      return []
    }
  },
  columns: {
    type: Array as any,
    default: () => {
      return []
    }
  },
  page: {
    type: Object,
    default: () => {
      return {}
    }
  },
  request: {
    type: Function,
    default: () => {
      return () => { }
    }
  },
  loading: {
    type: Boolean,
    defalut: false
  }
})
const elTabelRef = ref()
function currentPageChange(v: number) {
  props.page!.currentPage = v
  props.request()
  elTabelRef.value.setScrollTop(0)
}

function pageSizeChange(v: number) {
  props.page!.size = v
  props.request()
  props.page!.currentPage = 1
  elTabelRef.value.setScrollTop(0)
}

</script>

<style scoped lang='scss'>

</style>