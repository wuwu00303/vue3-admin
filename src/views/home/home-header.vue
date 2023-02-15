<template>
  <div class="h-full flex flex-col bg-white">
    <wzel-table v-bind="table"  border>
      <template v-slot:column="scope">
        <img :src="scope.row.photo" >
      </template>
    </wzel-table>
  </div>
</template>

<script setup lang='ts'>
import {  reactive, onMounted } from 'vue';
import http from '@/api/index'

const table= reactive({
  data: [],
  columns: [
    {
      label: '姓名',
      prop: "name",
      width: 80,
    },
    {
      label: '标题',
      prop: "title",
      width: 80,
    },
    {
      label: '公司',
      prop: "company",
      width: 80,
    },
    {
      label: '图片',
      prop: "photo",
      width: 80,
      slot: 'column'
    },
  ],
  page: {
    currentPage: 1,
    size: 10,
    total: 0,
  },
  request:getTableData,
  loading:false,
})

onMounted(() => {
  getTableData()
})

function getTableData() {
  table.loading = true 
  http({
    method: 'post',
    url: '/mock/data',
    data: {
      size: table.page.size,
      page: table.page.currentPage
    }
  }).then((res) => {
    table.loading = false
    table.data = res.data.list
    table.page.total = res.data.total
  })
}
</script>

<style scoped lang='scss'>

</style>