<template>
  <div class="w-full h-full flex flex-col bg-white">
    <wzel-form :items="query.items" :model="query.data" @search='search'>
    </wzel-form>
    <!-- 列表 -->
    <wzel-table v-bind="table" border>
      <template v-slot:column="scope">
        <img :src="scope.row.photo">
      </template>
    </wzel-table>
  </div>
</template>

<script setup lang='ts'>
import { reactive, onMounted } from 'vue';
import http from '@/api/index'


const table = reactive({
  data: [],
  columns: [
    {
      label: '姓名',
      prop: "name",
      width: 80,
    },
    {
      label: '性别',
      prop: "sex",
      width: 80,
    },
    {
      label: '年龄',
      prop: "age",
      width: 80,
    },
    {
      label: '邮件',
      prop: "mail",
      width: 80,
    },
    {
      label: '出生日期',
      prop: "dateOfBirth",
      width: 80,
    },
    {
      label: '介绍',
      prop: "introduce",
    },
  ],
  page: {
    currentPage: 1,
    size: 10,
    total: 0,
  },
  request: getTableData,
  loading: false,
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
const query = reactive({
  items: [
    {
      label: '姓名',
      prop: 'name',
      el: 'el-input',
      required: true,
      rules:
      {
        required: true,
        message: '必填哦',
      }
    },
    {
      label: '性别',
      prop: 'sex',
      el: 'el-input',
      required: true,
    },
    {
      label: '年龄',
      prop: 'age',
      el: 'el-input',
    },
    {
      label: '出生日期',
      prop: 'date',
      el: "el-date-picker",
      attrs: {
        type: "date",
        label: 'xx',
      },
    },
  ],
  data: {}
})
function search() {
  getTableData()
}
</script>

<style scoped lang='scss'>

</style>