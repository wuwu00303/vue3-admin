<template>
  <!-- 消息通知 -->
  <ElPopover width="320px" trigger="click">
    <template #reference>
      <div class="mx-3 cursor-pointer">
        <ElBadge :is-dot="true">
          <ElIcon size="20px">
            <Bell />
          </ElIcon>
        </ElBadge>
      </div>
    </template>
    <div>
      <!-- 头部 -->
      <div class="border-b h-10 flex items-center justify-between px-3">
        <ElBadge :value="infoList.length">
          <div>消息</div>
        </ElBadge>
        <div class="flex space-x-3">
          <!-- <div>全部已读</div> -->
          <div class="cursor-pointer">全部清空</div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="h-[150px] w-[100%]">
        <ElScrollbar>
          <div v-for="(item, index) in infoList" :key="index" class="flex items-center space-x-3 h-10 w-[100%] py-3">
            <div class="w-[30px]">
              <el-avatar icon="UserFilled" :size="30" />
            </div>
            <div class="flex-1 flex justify-between space-x-3">
              <div class="truncate">{{ item.info }}</div>
              <div class="w-[60px]">{{ item.time }}</div>
            </div>
          </div>
        </ElScrollbar>
      </div>
    </div>
  </ElPopover>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const infoList = reactive([
  {
    info: '你有一条信息，请注意查收',
    time: '1分钟前'
  },
  {
    info: '你有一条信息，请注意查收',
    time: '1小时前'
  },
  {
    info: '你有一条信息，请注意查收',
    time: '1天前'
  },
  {
    info: '你有一条信息，请注意查收',
    time: '1天前'
  },
  {
    info: '你有一条信息，请注意查收',
    time: '1天前'
  },
  {
    info: '你有一条信息，请注意查收',
    time: '1天前'
  },
])
</script>

<style scoped lang='scss'>

</style>