<template>
  <!-- 头像 -->
  <ElDropdown class="cursor-pointer" trigger="click">
    <div class="flex items-center">
      <div class="flex items-center justify-center w-7 h-7 rounded-full bg-gray-400">
        <ElAvatar class="w-7 h-7" :src="userStore.userInfo.portrait"></ElAvatar>
      </div>
      <div class="mx-2">{{ userStore.userInfo.name }}</div>
      <ElIcon><ArrowDown /></ElIcon>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem icon="SwitchButton" @click="loginOut">退出登陆</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<script setup lang='ts'>
import useUserStore from '@/stores/userStore';
import useAppStore from '@/stores/appStore';

const userStore = useUserStore();
const appStore = useAppStore();


function loginOut(){
  userStore.off()
  appStore.appTabsRef?.restore()
}
</script>

<style scoped lang='scss'>

</style>