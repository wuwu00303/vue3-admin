<template>
  <div v-loading="loading" class="h-full bg-white">
    <ElButton type="primary" @click="getAdminAcc">切换到管理员</ElButton>
    <ElButton type="primary" @click="getUserAcc">切换到用户</ElButton>
  </div>

</template>

<script setup lang='ts'>
import useUserStore from '@/stores/userStore'
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()
const admin = reactive({
  account: 'admin',
  password: '1234',
})
const user = reactive({
  account: 'user',
  password: '1234',
})
let loading = ref(false)

function getAdminAcc() {
  loading.value = true
  userStore.login(admin).then(() => {
    loading.value = false
    router.push({ path: '/authority-cut' })
  })
}

function getUserAcc() {
  loading.value = true
  userStore.login(user).then(() => {
    loading.value = false
    router.push({ path: '/authority-cut' })
  })

}
</script>

<style scoped lang='scss'>

</style>