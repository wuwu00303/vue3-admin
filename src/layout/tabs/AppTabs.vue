<template>
  <div class="flex justify-between items-center p-2 border-b">
    <ElTabs :model-value="route.path" type="card" @tab-change="tabClick" @tab-remove="tabRemove" class="h-[30px]">
      <ElTabPane :label="item.title" :name="item.path" v-for="item in data" :key="item.path" :closable="item.closable!==false"
        class="boder-y-0">
        <template #label>
          <span>
            <ElIcon class="mr-1 reactive top-[1px]">
              <component :is="item.icon"></component>
            </ElIcon>
            <span>{{ item.title }}</span>
          </span>
        </template>
      </ElTabPane>
    </ElTabs>
    <ElDropdown trigger="click">
      <ElButton type="primary" size="small">
        更多
        <ElIcon>
          <ArrowDown />
        </ElIcon>
      </ElButton>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>
            <ElIcon>
              <Refresh />
            </ElIcon>
            <span @click="refresh">刷新当前页面</span>
          </ElDropdownItem>
          <ElDropdownItem :divided="true" @click="offOthersChange">
            <ElIcon>
              <CircleClose />
            </ElIcon>
            <span>关闭其他页面</span>
          </ElDropdownItem>
          <ElDropdownItem :divided="true" @click="offAllChange">
            <ElIcon>
              <FolderDelete />
            </ElIcon>
            <span>关闭所有页面</span>
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang='ts'>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TabPaneName } from 'element-plus'
import { userStorage } from '@/utils/storage'

const emit = defineEmits(['refresh'])
const route = useRoute()
const router = useRouter()
const data = userStorage('tabsData', [
  {
    path: '/home',
    icon: 'HomeFilled',
    title: "首页",
    closable: false,
  }
])

//监听当前的path，向data添加数据
watch(
  () => route.path,
  () => {
    if (!data.value.find((item) => item.path == route.path)) {
      data.value.push(
        {
          path: route.path,
          icon: route.meta.icon as string,
          title: route.meta.title as string,
          closable: route.meta.closable as boolean,
        }
      )
    }
  },

)

//tab 切换
function tabClick(name: TabPaneName) {
  router.push({ path: name as string })
}

// 移除 tab
function tabRemove(name: TabPaneName) {
  let index = data.value.findIndex((item) => item.path == name);
  if (name === route.path) {
    if (index === data.value.length - 1) {
      router.push({ path: data.value[index - 1].path })
    } else {
      router.push({ path: data.value[index + 1].path })
    }
  }
  data.value.splice(index, 1)
}

//关闭所有页面
function offAllChange() {
  restore()
  router.push({ path: '/home' })
}
//关闭其他页面
function offOthersChange() {
  data.value = data.value.filter((item) => {
    return item.path === route.path || !item.closable
  })
}

//刷新当前页面
function refresh() {
  emit('refresh')
}

//页面初始化
function restore() {
  data.value.splice(1)
}

defineExpose({
  data: data, restore: restore,
})
</script>

<style scoped lang='scss'>
::v-deep {
  .el-tabs__header {
    margin-bottom: 0px;
    border: none;
    height: 30px;
  }

  .el-tabs {
    --el-tabs-header-height: 30px;
  }

  .el-tabs--card>.el-tabs__header .el-tabs__nav {
    // border: none;
    border-bottom: 1px solid #e4e7ed;
    border-radius: 4px;

  }

}
</style>