<template>
  <div>
    <ElDrawer v-model="appStore.drawer" title="布局设置" size="300px">
      <div class="border-t w-[100%] h-[100%] p-3">
        <div>
          <ElDivider content-position="center">布局切换</ElDivider>
          <div class="h-[80px] flex justify-around items-center">
            <!-- 标准布局 -->
            <div class="w-[80px] h-[60px] border-2 rounded p-1 cursor-pointer" :class="{active: appStore.currentLayout === 0 }"
              @click="switchingLayouts(0)">
              <div class="w-[100%] h-4 border-2 rounded mb-1"></div>
              <div class="flex">
                <div class="w-5 h-7 border-2 rounded mr-1"></div>
                <div class="flex-1 h-7 border-2 rounded"></div>
              </div>
            </div>
            <!-- 垂直布局 -->
            <div class="w-[80px] h-[60px] border-2 rounded flex items-center p-1 cursor-pointer"
              :class="{ active: appStore.currentLayout === 1 }" @click="switchingLayouts(1)">
              <div class="w-5 h-[100%] border-2 rounded mr-1"></div>
              <div class="flex-1 h-[100%]">
                <div class="w-[100%] h-4 border-2 mb-1 rounded"></div>
                <div class="w-[100%] h-7 border-2 rounded"></div>
              </div>
            </div>
            <!-- 水平布局 -->
            <div class="w-[80px] h-[60px] border-2 rounded p-1 cursor-pointer" :class="{active: appStore.currentLayout === 2 }"
              @click="switchingLayouts(2)">
              <div class="w-[100%] h-4 border-2 rounded mb-1"></div>
              <div class="w-[100%] h-7 border-2 rounded"></div>
            </div>
          </div>
        </div>
        <div>
          <ElDivider content-position="center">界面设置</ElDivider>
          <div class="px-2 space-y-3">
            <div class="flex justify-between items-center">
              <div class="text-sm">面包屑</div>
              <el-switch v-model="appStore.interfaceSettings.crumbsSwitch" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-sm">标签栏</div>
              <el-switch v-model="appStore.interfaceSettings.tabBarSwitch" />
            </div>
            <div class="flex justify-between items-center">
              <div class="text-sm">页脚</div>
              <el-switch v-model="appStore.interfaceSettings.footerSwitch" />
            </div>
          </div>
        </div>
      </div>
    </ElDrawer>
  </div>

</template>

<script setup lang='ts'>
import useAppStore from '@/stores/appStore'

const appStore = useAppStore();


function switchingLayouts(v: number) {
  appStore.setCurrentLayout(v)
}

</script>

<style scoped lang='scss'>
::v-deep {
  .el-drawer__header {
    margin-bottom: 15px;
  }

  .el-drawer__body {
    padding: 0px;
  }
}
.active {
  @apply border-blue-400
}
</style>